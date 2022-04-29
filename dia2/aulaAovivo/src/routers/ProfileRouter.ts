import { Router } from 'express';

import GenericController from '../controllers/GenericController';
import { IProfile } from '../interfaces/IProfile';
import ProfileService from '../services/ProfileService';

const profileService = new ProfileService();
const profileController = new GenericController<IProfile>(profileService);

const profileRouter = Router();

const profileByIdRoute = '/profiles/:id';

profileRouter
  .get('/profiles', (req, res) => profileController.read(req, res))
  .get(profileByIdRoute, (req, res) => profileController.readOne(req, res))
  .post('/profiles', (req, res) => profileController.create(req, res))
  .put(profileByIdRoute, (req, res) => profileController.update(req, res))
  .delete(profileByIdRoute, (req, res) => profileController.delete(req, res));

export default profileRouter;
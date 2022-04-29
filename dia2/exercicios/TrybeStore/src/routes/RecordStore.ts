import { Router } from 'express';

import GenericController from '../controllers/GenericController';
import Frame from '../interfaces/IStore';
import RecordStoreService from '../services/RecordStoreService'; 

const recordStoreService = new RecordStoreService();
const genericController = new GenericController<Frame>(recordStoreService);

const storeRoute = Router({ mergeParams: true });

storeRoute
  .get('/', (req, res) => genericController.read(req, res))
  .get('/:id', (req, res) => genericController.readOne(req, res))
  .post('/', (req, res) => genericController.create(req, res))
  .put('/:id', (req, res) => genericController.update(req, res))
  .delete('/:id', (req, res) => genericController.delete(req, res));


export default storeRoute;
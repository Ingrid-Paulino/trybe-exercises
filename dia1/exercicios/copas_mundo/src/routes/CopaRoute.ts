import * as express from 'express';
import CopaController from '../controllers/CopaController'

const copaController = new CopaController();

const copaRoute = express.Router({ mergeParams: true });

// pq o primeiro não deu certo?
// copaRoute.get('/', CopaController.getCopas);
copaRoute.get('/:runner', copaController.filtroUp);
copaRoute.get('/:year', copaController.readByYear);
copaRoute.get('/', copaController.read);
copaRoute.post('/', copaController.create);
copaRoute.put('/:year', copaController.update);
copaRoute.delete('/:year', copaController.delete);



export default copaRoute;
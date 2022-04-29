// import App from '../app';

// const app = new App().express;

import * as express from 'express';
import copaRoute from './CopaRoute';

// const route = app.Router({ mergeParams: true });
const route = express.Router({ mergeParams: true });

route.use('/copas', copaRoute);

export default route;
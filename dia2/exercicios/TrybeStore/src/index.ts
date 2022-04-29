import App from './app';
import storeRoute from './routes/index';

const app = new App();

app.addRouter(storeRoute);

app.startServer();
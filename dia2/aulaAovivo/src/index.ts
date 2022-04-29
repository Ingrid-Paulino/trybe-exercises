import App from './app';
import profileRouter from './routers/ProfileRouter';

const app = new App();

app.addRouter(profileRouter);

app.startServer();
  import express from 'express';
  import routes from './routes'
  import connection from './models/connection';

  class App {
    // Qual devo usar?
    public express: express.Application;
    // public express: express.Express;

    // Qual devo usar?
    public connection: Promise<typeof import('mongoose')>;
    // public connection: void;

    constructor() {
      this.express = express();
      this.middlewares();
      this.connection = connection();
      // this.connection = connection('mongodb://localhost:27017/world_cups');
      this.routes();
    }

    private middlewares(): void {
      this.express.use(express.json());
    }

    private routes() {
      this.express.use(routes);
    }
  }

  export default App;
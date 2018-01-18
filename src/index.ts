import * as express from "express";
import { Config } from './config';

// Routes
import { Login } from './routes/login.route';
import { Products } from './routes/products.route';

export class Server {
  public app:any;
  public port: number;

  constructor(port=8008) {
    this.app = express();
    this.port = port;

    this.appConfig();

    this.setEndPoints();
  }

  appConfig() {
    Config.set(this.app);
  }

  setEndPoints() {
    const router: express.Router = express.Router();

    this.app.use(router);

    Login.endPoint(router);
    Products.endPoint(router);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`API running on port ${this.port}`)
    });
  }
}

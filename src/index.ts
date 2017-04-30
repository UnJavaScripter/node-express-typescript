import * as express from "express";
import { Config } from './config';
import { Login } from './login';
import { Chancletas } from './chancletas';

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
    Chancletas.endPoint(router);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`API running on port ${this.port}`)
    });
  }
}

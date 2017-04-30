import * as bodyParser from "body-parser";
import { NextFunction, Request, Response, Router } from "express";

export class Config {

  public static set(app: any) {
    app = app;

    app.use(bodyParser.json());

    // CORS
    app.use((req: Request, res: Response|any, next: NextFunction) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods',' GET,PUT,POST,DELETE');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, token, X-AUTH-TOKEN");
      next();
    });
  }
}
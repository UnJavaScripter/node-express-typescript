import { NextFunction, Request, Response, Router } from "express";

export class Login{
  public static endPoint(router: Router) {
    router.post("/api/login", (req: Request, res: Response, next: NextFunction) => {
      res.json({
        "user_name": "dr_acula",
        "first_name": "James",
        "last_name": "Acula",
        "user_id": "i87fd98sd0971kjl0s"
      });
    });
  }

}
import { NextFunction, Request, Response, Router } from "express";
import { chancletaData } from './chancleta-data';

export class Chancletas{
  public static endPoint(router: Router) {
    router.get("/api/chancletas", (req: Request, res: Response, next: NextFunction) => {
      const filterParam = req.query.search;

      // Filtered request
      if(filterParam) {
        const filterRegex = new RegExp(filterParam, 'gi');

        let filteredResult = chancletaData.filter(elem => {
          let match;
          Object.keys(elem).map(key => {
            if(String(elem[key]).toLowerCase().match(filterRegex)) {
              match = elem
            }
          })
          return match
        })

        return res.json(filteredResult);
      }

      // Regular bulk request
      return res.json(chancletaData);
    });

    router.get("/chancletas/:id", (req: Request, res: Response, next: NextFunction) => {
      return res.json(chancletaData[req.params.id])
    });



  }

}

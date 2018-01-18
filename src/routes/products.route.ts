import { Product } from './../models/product.model';
import { NextFunction, Request, Response, Router } from "express";
import { ProductData } from '../data-sample/product-data';

export class Products {
  public static endPoint(router: Router) {

    const ProductDataMap = new Map();
    ProductData.map((elem: Product) => ProductDataMap.set(elem.id, elem));

    router.get("/api/products", (req: Request, res: Response, next: NextFunction) => {
      const filterParam = req.query.search;
      // Regular bulk request
      if (filterParam === undefined) {
        return res.json(ProductData)
      }
      
      // Filtered request
      const filteredResult = [...ProductDataMap.values()]
        .filter(product => {
          // A really basic and not efficient search method:
          return JSON.stringify(product)         // We turn the json object into a string to search for any filter param matches
            .replace(/\"(\w|\d)\":/, '')      // We remove the object keys, won't need to search inside those
              .toLocaleLowerCase()            // Make the text lowercase so the String's `includes` method can match it
                .includes(filterParam);       // Returns a boolean value for the filter to use
        });

      if(!filteredResult.length) {
        return res.sendStatus(404);
      }
      return res.json(filteredResult);

    });

    router.get("/api/products/:id", (req: Request, res: Response, next: NextFunction) => {
      const responseElem = ProductDataMap.get(Number(req.params.id));
      if (!responseElem) {
        return res.status(404);
      }
      return res.json(responseElem);
    });

  }

}

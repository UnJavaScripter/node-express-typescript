"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_data_1 = require("../data-sample/product-data");
class Products {
    static endPoint(router) {
        const ProductDataMap = new Map();
        product_data_1.ProductData.map((elem) => ProductDataMap.set(elem.id, elem));
        router.get("/api/products", (req, res, next) => {
            const filterParam = req.query.search;
            if (filterParam === undefined) {
                return res.json(product_data_1.ProductData);
            }
            const filteredResult = [...ProductDataMap.values()]
                .filter(product => {
                return JSON.stringify(product)
                    .replace(/\"(\w|\d)\":/, '')
                    .toLocaleLowerCase()
                    .includes(filterParam);
            });
            if (!filteredResult.length) {
                return res.sendStatus(404);
            }
            return res.json(filteredResult);
        });
        router.get("/api/products/:id", (req, res, next) => {
            const responseElem = ProductDataMap.get(Number(req.params.id));
            if (!responseElem) {
                return res.status(404);
            }
            return res.json(responseElem);
        });
    }
}
exports.Products = Products;

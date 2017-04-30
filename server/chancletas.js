"use strict";
exports.__esModule = true;
var chancleta_data_1 = require("./chancleta-data");
var Chancletas = (function () {
    function Chancletas() {
    }
    Chancletas.endPoint = function (router) {
        router.get("/api/chancletas", function (req, res, next) {
            var filterParam = req.query.search;
            if (filterParam) {
                var filterRegex_1 = new RegExp(filterParam, 'gi');
                var filteredResult = chancleta_data_1.chancletaData.filter(function (elem) {
                    var match;
                    Object.keys(elem).map(function (key) {
                        if (String(elem[key]).toLowerCase().match(filterRegex_1)) {
                            match = elem;
                        }
                    });
                    return match;
                });
                return res.json(filteredResult);
            }
            return res.json(chancleta_data_1.chancletaData);
        });
        router.get("/chancletas/:id", function (req, res, next) {
            return res.json(chancleta_data_1.chancletaData[req.params.id]);
        });
    };
    return Chancletas;
}());
exports.Chancletas = Chancletas;

"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var Config = (function () {
    function Config() {
    }
    Config.set = function (app) {
        app = app;
        app.use(bodyParser.json());
        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', ' GET,PUT,POST,DELETE');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, token, X-AUTH-TOKEN");
            next();
        });
    };
    return Config;
}());
exports.Config = Config;

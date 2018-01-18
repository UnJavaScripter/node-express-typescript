"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
class Config {
    static set(app) {
        app = app;
        app.use(bodyParser.json());
        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', ' GET,PUT,POST,DELETE');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, token, X-AUTH-TOKEN");
            next();
        });
    }
}
exports.Config = Config;

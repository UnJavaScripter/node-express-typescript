"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("./config");
const login_route_1 = require("./routes/login.route");
const products_route_1 = require("./routes/products.route");
class Server {
    constructor(port = 8008) {
        this.app = express();
        this.port = port;
        this.appConfig();
        this.setEndPoints();
    }
    appConfig() {
        config_1.Config.set(this.app);
    }
    setEndPoints() {
        const router = express.Router();
        this.app.use(router);
        login_route_1.Login.endPoint(router);
        products_route_1.Products.endPoint(router);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`API running on port ${this.port}`);
        });
    }
}
exports.Server = Server;

"use strict";
exports.__esModule = true;
var express = require("express");
var config_1 = require("./config");
var login_1 = require("./login");
var chancletas_1 = require("./chancletas");
var Server = (function () {
    function Server(port) {
        if (port === void 0) { port = 8008; }
        this.app = express();
        this.port = port;
        this.appConfig();
        this.setEndPoints();
    }
    Server.prototype.appConfig = function () {
        config_1.Config.set(this.app);
    };
    Server.prototype.setEndPoints = function () {
        var router = express.Router();
        this.app.use(router);
        login_1.Login.endPoint(router);
        chancletas_1.Chancletas.endPoint(router);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("API running on port " + _this.port);
        });
    };
    return Server;
}());
exports.Server = Server;

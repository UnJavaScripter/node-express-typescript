"use strict";
exports.__esModule = true;
var Login = (function () {
    function Login() {
    }
    Login.endPoint = function (router) {
        router.post("/api/login", function (req, res, next) {
            res.json({
                "user_name": "dr_acula",
                "first_name": "James",
                "last_name": "Acula",
                "user_id": "i87fd98sd0971kjl0s"
            });
        });
    };
    return Login;
}());
exports.Login = Login;

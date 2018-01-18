"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Login {
    static endPoint(router) {
        router.post("/api/login", (req, res, next) => {
            res.json({
                "user_name": "dr_acula",
                "first_name": "James",
                "last_name": "Acula",
                "user_id": "i87fd98sd0971kjl0s"
            });
        });
    }
}
exports.Login = Login;

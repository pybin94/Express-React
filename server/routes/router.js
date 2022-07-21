import express from "express";
import LoginCheck from "../middlewares/LoginCheck.js";
import Login from "./Login/Login.js"
import User from "./User/User.js"
import Analytics from "./Analytics/Analytics.js"



export default () => {
    const router = express.Router();
    router.use('/login', Login());
    router.use('/user', LoginCheck, User());
    router.use('/analytics', LoginCheck, Analytics());

    return router;
}
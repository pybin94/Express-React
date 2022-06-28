import express from "express";
import LoginCheck from "../middlewares/LoginCheck.js";
import Main from "./Main/Main.js"
import Login from "./Login/Login.js"
import User from "./User/User.js"



export default () => {
    const router = express.Router();

    // router.use('/', LoginCheck, Main());
    router.use('/login', Login());
    router.use('/user', User());

    return router;
}
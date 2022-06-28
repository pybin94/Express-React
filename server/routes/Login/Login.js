// 라우팅 기본 템플릿
import express from "express";
import path from 'path';
// import csrf from "csurf";
import logger from "../../helper/LogHelper.js";
import { postLogin } from "./Login.ctrl.js";

export default () => {
    const router = express.Router();

    router.post("/", postLogin)

    return router;
}
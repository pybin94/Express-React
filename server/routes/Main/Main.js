// 라우팅 기본 템플릿

import logger from "../../helper/LogHelper.js";
import express from "express";
import path from 'path';
// import csrf from "csurf";
import { main } from "./Main.ctrl.js";

export default () => {
    const router = express.Router();
    const __dirname = path.resolve();

    router.get("/", main)

    return router;
}
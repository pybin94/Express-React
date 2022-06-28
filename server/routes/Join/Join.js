// 라우팅 기본 템플릿
import express from "express";
// import csrf from "csurf";
import logger from "../../helper/LogHelper.js";
import { postJoin } from "./Join.ctrl.js";

export default () => {
    const router = express.Router();

    router.post("/", postJoin)

    return router;
}
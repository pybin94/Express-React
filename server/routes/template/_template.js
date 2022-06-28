// 라우팅 기본 템플릿
import express from "express";
import path from 'path';
// import csrf from "csurf";
import logger from "../../helper/LogHelper.js";
import _template from "./main/_template.js";

export default () => {
    const router = express.Router();
    const __dirname = path.resolve();

    router.get("/", _template)

    return router;
}
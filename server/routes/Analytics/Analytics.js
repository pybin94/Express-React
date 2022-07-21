// 라우팅 기본 템플릿

import logger from "../../helper/LogHelper.js";
import express from "express";
import path from 'path';
import { analytics, betterzone } from "./Analytics.ctrl.js";

export default () => {
    const router = express.Router();
    const __dirname = path.resolve();

    router.get("/", analytics)
    router.get("/betterzone", betterzone)
    // router.get("/powersoft", powersoft)

    return router;
}
// 라우팅 기본 템플릿
import express from "express";
// import csrf from "csurf";
import logger from "../../helper/LogHelper.js";
import { getUser, getPersonalUser, postUser, putUser, deleteUser } from "./User.ctrl.js";

export default () => {
    const router = express.Router();

    router.get("/", getUser)
    router.get("/:id", getPersonalUser)
    router.post("/", postUser)
    router.patch("/:id", putUser)
    router.delete("/", deleteUser)

    return router;
}
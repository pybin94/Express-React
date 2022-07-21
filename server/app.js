import express from "express";
import cluster from "cluster";
import { cpus } from "os";
import process from "process";
import config from "./helper/_config.js";
import logger from "./helper/LogHelper.js";
import {myip, urlFormat} from "./helper/UtilHelper.js";
import {error_404, error_500} from "./helper/ErrorHelper.js"
import router from "./routes/router.js"
import path from "path";
import cors from "cors";

const app = express();
const __dirname = path.resolve();

app.use(cors())
app.use(express.json())
app.use('/assets', express.static('assets'));

// 라우팅
app.use(router());
app.use(error_404);
app.use(error_500);

const ip = myip()

if (cluster.isMaster){
    console.log(`마스터 프로세스 아이디: ${process.pid}`);
    for (let i = 0; i < cpus().length; i += 1) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        logger.Error(`${worker.process.pid}번 워커가 종료되었습니다.`);
        console.log('code', code, 'signal', signal);
        cluster.fork();
    });

} else {
    app.listen(config.server_port, () => {
        // ip.forEach((v, i) => {
        //     logger.info("server address => http://" + v + ":" + config.server_port)
        // })
    })
    console.log(`${process.pid}번 워커 실행`);
}



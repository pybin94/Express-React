import {join, resolve} from 'path';

const __dirname = resolve();

export default {
    
    // 웹 서버 포트번호
    server_port : 80,

    // database 연결 정보
    mysql_connection: {
        host     : 'localhost',
        user     : 'teamlemon',
        password : 'Rkdska1125!',
        database : 'lemon',
        dateStrings : "date",
        connectionLimit: 30,       // 최대 커넥션 수
        connectTimeout: 2000,       // 커넥션 타임아웃
        waitForConnections: true,   // 커넥션 풀이 다 찬 경우 처리
    },

    mysql_connection_davelopment: {
        host     : 'localhost',
        user     : 'teamlemon',
        password : 'Rkdska1125!',
        database : 'lemon_test',
        dateStrings : "date",
        connectionLimit: 30,
        connectTimeout: 2000,
        waitForConnections: true,
    },
    
    // 로그 파일이 저장될 경로 및 출력 레벨
    log: {
        debug: {
            path: join(__dirname, '_files/_logs'),
            level: 'debug',
        },
        error: {
            path: join(__dirname, '_files/_logs'),
            level: 'error',
        },
    },

    // public 디렉토리 경로
    public_path: join(__dirname, "/public"),

    // favicon 경로
    favicon_path: join(__dirname, "/public/favicon.png"),

    // JWT 보안키
    SECRET_KEY: "qnniQzF2Y9oSrUn",

    ids: {
        batterzone: 271030898,
        powersoft: 269931426,
        totoplus: 269503560,
    },
};
import logger from "../../helper/LogHelper.js";
import pool from "../../helper/DBPool.js";
import path from "path";

const __dirname = path.resolve();

export const analytics = async (req, res, next) => {
    let dbcon = null;
    const sql = 
    "SELECT name, enterances FROM analytics WHERE NAME = '베터존' LIMIT 30"
    //    `(SELECT name, enterances FROM analytics WHERE NAME = '베터존' LIMIT 30) 
    //     UNION ALL (SELECT name, enterances FROM analytics WHERE NAME = '파워소프트' LIMIT 30)
    //     UNION ALL (SELECT name, enterances FROM analytics WHERE NAME = '올픽' LIMIT 30)
    //     UNION ALL (SELECT name, enterances FROM analytics WHERE NAME = '픽365' LIMIT 30)
    //     UNION ALL (SELECT name, enterances FROM analytics WHERE NAME = '일간슬롯' LIMIT 30)
    //     UNION ALL (SELECT name, enterances FROM analytics WHERE NAME = '안전사이트진흥청' LIMIT 30)
    //     UNION ALL (SELECT name, enterances FROM analytics WHERE NAME = '오파모' LIMIT 30)
    //     UNION ALL (SELECT name, enterances FROM analytics WHERE NAME = '코인파워볼협회' LIMIT 30)
    //     UNION ALL (SELECT name, enterances FROM analytics WHERE NAME = '팀레몬' LIMIT 30)`

    try {
        dbcon = await pool.getConnection();
        const [result] = await dbcon.query(sql);
        res.status(200).json(result);
    } catch (error){
        logger.error("analytics " + error);
        return next(error);
    
    } finally {
        if(dbcon) { dbcon.release(); };
    };
}

export const betterzone = async (req, res, next) => {
    let dbcon = null;
    const sql = `SELECT name, enterances, new_sessions, bounce, bounce_rate, avg_time_on_page, organic_searches, pageviews, entrances_per_pageviews FROM analytics WHERE name = "${"베터존"}" ORDER BY ID DESC LIMIT 1`;

    try {
        dbcon = await pool.getConnection();
        const [result] = await dbcon.query(sql);
        res.status(200).json(result);
    } catch (error){
        logger.error("analytics " + error);
        return next(error);
    
    } finally {
        if(dbcon) { dbcon.release(); };
    };
}
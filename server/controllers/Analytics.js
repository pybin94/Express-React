import logger from "../helper/LogHelper.js";
import pool from "../helper/DBPool.js";
import config from "../helper/_config.js";
import fetch from 'node-fetch';
import cron from 'node-cron';

import {google} from 'googleapis';
import key from './Analytics.json' assert { type: "json" };

const getAccessToken = () => {
    let jwtClient = new google.auth.JWT(
        key.client_email, null, key.private_key,
        ['https://www.googleapis.com/auth/analytics.readonly'], null);
        jwtClient.authorize((error, tokens) => {
    
        console.log("토큰", tokens)
        if (error) {
            console.log("[ERROR] getAccessToken", error);
            return;
        }
        let access_token = (tokens.access_token.substring(0, tokens.access_token.length - 793))
        Analytics(access_token, config.ids.batterzone, "베터존")
        // Analytics(access_token, config.ids.powersoft, "파워소프트")
        // Analytics(access_token, config.ids.totoplus, "토토플러스")
    });
}


const Analytics = async (access_token, ids, name) => {
    const response = await fetch(`https://www.googleapis.com/analytics/v3/data/ga?access_token=${access_token}&ids=ga%3A${ids}&metrics=ga%3ApercentNewSessions%2Cga%3Abounces%2Cga%3AbounceRate%2Cga%3AorganicSearches%2Cga%3Aentrances%2Cga%3AentranceRate%2Cga%3Apageviews%2Cga%3AavgTimeOnPage&start-date=1daysAgo&end-date=today`)
    const res = await response.json();
    const sql = `INSERT INTO analytics (name, enterances, new_sessions, bounce, bounce_rate, avg_time_on_page, organic_searches, pageviews, entrances_per_pageviews) VALUE("${name}", ${parseInt(res.rows[0][4])}, ${parseInt(res.rows[0][0])}, ${parseInt(res.rows[0][1])}, ${parseInt(res.rows[0][2])}, ${parseInt(res.rows[0][7])}, ${parseInt(res.rows[0][3])}, ${parseInt(res.rows[0][6])}, ${parseInt(res.rows[0][5])})`;
    let dbcon = null;

    try {
        dbcon = await pool.getConnection() 
        await dbcon.query(sql)

    } catch (error){
        return logger.error("Insert Analytics Error " + error);

    } finally {
        if(dbcon) { dbcon.release(); }

    }
}
// cron.schedule('59 23 * * *', () => {
    getAccessToken()
    // logger.info("Node Cron Working At 23:59")
// });
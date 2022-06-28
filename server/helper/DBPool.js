import mysql from "mysql2/promise";
import config from '../helper/_config.js';
import logger from '../helper/LogHelper.js';

const pool = mysql.createPool(config.mysql_connection_davelopment);

(async () => {
    let dbcon = null;

    try {
        dbcon = await pool.getConnection();
        logger.debug('====Database Connected====');
        
    } catch (error) {
        logger.error("pool 임대에 실패했습니다.")
        logger.error(error)
        return;

    } finally {
        if(dbcon) { 
            dbcon.release();
        }
    }
})();

export default pool;
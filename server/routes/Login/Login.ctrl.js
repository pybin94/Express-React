import config from "../../helper/_config.js"; 
import logger from "../../helper/LogHelper.js";
import pool from "../../helper/DBPool.js"
import crypto from "crypto"
import jwt from 'jsonwebtoken';

export const postLogin = async (req, res, next) => {

    const sql = "SELECT * FROM user WHERE user_id = ?";
    const YOUR_SECRET_KEY = config.SECRET_KEY;

    let dbcon = null;
    let params = [req.body.user_id]
    let encodeCrypto = crypto.createHash('sha512').update(req.body.user_pw).digest('base64')

    try {
        dbcon = await pool.getConnection()
        const [result] = await dbcon.query(sql, params)

        if(!result[0] || result[0].user_pw !== encodeCrypto) {
            return res.status(200).json({result:"fail"})
        }
        

        const token = jwt.sign({ 
            user_id: result[0].user_id,
            user_name: result[0].user_name,
            user_auth: result[0].user_auth,
        }, YOUR_SECRET_KEY, {
            expiresIn: '12h'

        });

        res.cookie('user', token);  
        res.status(200).json({
            result: 'ok', 
            token
        });

    } catch (error){
        logger.error("Login " + error)
        return next(error)
  
    } finally {
        if(dbcon) { dbcon.release(); }
    }
}



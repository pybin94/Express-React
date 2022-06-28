import logger from "../../helper/LogHelper.js";
import pool from "../../helper/DBPool.js"
import crypto from "crypto"

export const postJoin = async (req, res, next) => {

    if(!req.body.user_id) { return res.status(200).json({status:"fail"}) };
    if(!req.body.user_pw) { return res.status(200).json({status:"fail"}) };
    if(!req.body.user_name) { return res.status(200).json({status:"fail"}) };

    let encodeCrypto = crypto.createHash('sha512').update(req.body.user_pw).digest('base64')
    let dbcon = null;
    const sql = "INSERT INTO user (user_id, user_pw, user_name) VALUES(?,?,?);"
    let params = [req.body.user_id, encodeCrypto, req.body.user_name]

    try {
        dbcon = await pool.getConnection();
        await dbcon.query(sql, params);

        return res.status(200).json({status: "success"});

    } catch (error){
        logger.error("Login " + error)
        return next(error)
    
    } finally {
        if(dbcon) { dbcon.release(); }
    }

}
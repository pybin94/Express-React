import logger from "../../helper/LogHelper.js";
import pool from "../../helper/DBPool.js";
import crypto from "crypto";

export const getUser = async (req, res, next) => {
    let dbcon = null;
    const sql = "SELECT id, user_id, user_name, join_date FROM user WHERE user_auth = ?"
    let params = ["U"];

    try {
        dbcon = await pool.getConnection();
        const [result] = await dbcon.query(sql, params);
        res.status(200).json(result);
    } catch (error){
        logger.error("Login " + error);
        return next(error);
    
    } finally {
        if(dbcon) { dbcon.release(); };
    };
};

export const getPersonalUser = async (req, res, next) => {
    let dbcon = null;
    const sql = 'SELECT user_id, user_name FROM user WHERE user_auth = "U" AND id = ?;';
    let { id } =  req.params; 
    let params = [ id ];
    try {
        dbcon = await pool.getConnection();
        const [result] = await dbcon.query(sql, params);
        res.status(200).json(result);
    } catch (error){
        logger.error("Login " + error);
        return next(error);
    
    } finally {
        if(dbcon) { dbcon.release(); };
    };
};

export const postUser = async (req, res, next) => {

    if(!req.body.user_id) { return res.status(200).json({status:"fail"}) };
    if(!req.body.user_pw) { return res.status(200).json({status:"fail"}) };
    if(!req.body.user_name) { return res.status(200).json({status:"fail"}) };

    let encodeCrypto = crypto.createHash('sha512').update(req.body.user_pw).digest('base64');
    let dbcon = null;
    const sql = "INSERT INTO user (user_id, user_pw, user_name) VALUES(?,?,?);";
    const sqlIdCheck = "SELECT * FROM user WHERE id = ?;";
    let params = [req.body.user_id, encodeCrypto, req.body.user_name];

    try {
        dbcon = await pool.getConnection();
        const [result] = await dbcon.query(sqlIdCheck, [req.body.user_id]);

        if(result[0]){
            return res.status(200).json({status: "exist"});
        };

        await dbcon.query(sql, params);
        return res.status(200).json({status: "success"});

    } catch (error){
        logger.error("Login " + error);
        return next(error);
    
    } finally {
        if(dbcon) { dbcon.release(); };
    };
};

export const putUser = async (req, res, next) => {
    if(!req.body.user_id) { return res.status(200).json({status:"fail"}) };
    if(!req.body.user_name) { return res.status(200).json({status:"fail"}) };
    
    let dbcon = null;
    const sql = 'UPDATE user SET user_id = ?, user_name = ? WHERE id = ?';
    let { id } =  req.params;
    let params = [ req.body.user_id, req.body.user_name, id ];
    try {
        dbcon = await pool.getConnection();
        await dbcon.query(sql, params);
        return res.status(200).json({status: "success"});
    } catch (error){
        logger.error("Login " + error);
        return next(error);
    
    } finally {
        if(dbcon) { dbcon.release(); };
    };
};

export const deleteUser = async (req, res, next) => {
    const sql = 'DELETE FROM user WHERE id = ?;';
    let params = [req.body.id];
    let dbcon = null;

    try {
        dbcon = await pool.getConnection();
        await dbcon.query(sql, params);
        return res.status(200).json({status: "success"});

    } catch (error){
        logger.error("Login " + error);
        return next(error);
    
    } finally {
        if(dbcon) { dbcon.release(); };
    };
};

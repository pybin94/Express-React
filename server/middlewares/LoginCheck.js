import jwt from "jsonwebtoken";
import config from "../helper/_config.js"; 

export const loginCheck = (req, res, next) => {
  const key = config.SECRET_KEY;
  try {
    req.decoded = jwt.verify(req.headers.authorization, key);
    return next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(419).json({
        code: 419,
        message: "토큰이 만료되었습니다.",
      });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        code: 401,
        message: "유효하지 않은 토큰입니다.",
      });
    }
  }
};
export default loginCheck;
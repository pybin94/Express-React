import cors from "cors";
import url from "url";

const cors = async (req, res, next) => {
    const domain = await Domain.findeOne({
        where: { host: url.parse(req.get("origin"))?.host }
    });
    if(domain) {
        cors({
            origin: true,
            credentials: true,
        })(req, res, next);
    } else {
        next();
    }
}
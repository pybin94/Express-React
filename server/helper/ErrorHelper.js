import path from "path";

const __dirname = path.resolve();

export const error_404 = (req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/404.html")
}

export const error_500 = (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
}
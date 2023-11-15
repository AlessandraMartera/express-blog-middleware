module.exports = function (err, req, res, next) {

    res.status(401).json({
        message: "qualcosa è andato storto",
        error: err.message
    })

    next();
}
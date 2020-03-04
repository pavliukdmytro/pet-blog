const jwt = require('jsonwebtoken');
const {jwtSecret} = require('config');
//console.log(jwtSecret);
function auth(req, res, next) {
    try{
        if(req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            req.user = jwt.verify(token, jwtSecret);
        }
        next();
    } catch (err) {
        //console.error(err);
        return res.status(401).json({ok: false, message: 'Нет авторизации'});
    }
}

module.exports = auth;
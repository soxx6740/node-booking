const config = require('config');
const { auth } = require('app/actions');

/**
 * A function to excute the authenication procedure.
 * @param {Request} req 
 * @param {Response} res 
 * @param {Next Function} next 
 */
function loggedIn(req, res, next) {
    const authKey = getAuthKeyFromRequest(req);
    /*
    auth.check(authKey)
        .then((user) => {
            if (user) {
                req.user = user;
                req.authKey = authKey;
                next();
            } else {
                res.status(401).send({ msg: 'unauthorized' });
            }
        });
        */
}

/**
 * A function to excute the logout procedure.
 * @param {Request} req 
 * @param {Response} res 
 * @param {Next function} next 
 */
function loggedOut(req, res, next) {
    const authKey = getAuthKeyFromRequest(req);
    /*
    auth.check(authKey)
        .then((user) => {
            if (user) {
                res.status(400).send({ msg: 'already logged in' });
            } else {
                next();
            }
        });
        */
}

/**
 *  A Function to extract the authenication token from the request header.
 * @param {Request} req 
 */
function getAuthKeyFromRequest(req) {
    return req.header(config.headers.authToken);
}

module.exports = {
    loggedIn,
    loggedOut
};

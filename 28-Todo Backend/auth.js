const jwt = require('jsonwebtoken')
const JWT_SECRET = "daerwethw9e8t84th4utwehethiwuht"
const fs = require('fs')

const time = new Date()
const timeDate = time.toISOString()

function auth(req, res, next){
    const token = req.headers.token;
    if(!req.headers.token){
        console.log('No header Provided')
        return res.status(403).json({
            message: "Please SignIn to continue."
        })
    }
    const decodeData = jwt.verify(token, JWT_SECRET)

    if(decodeData){
        req.userId = decodeData.id;
        next();
    } else {
        return res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

function loggerMiddleware(req, res, next){
    const logMessage = `${timeDate} Request Method ${req.method} received from ${req.hostname} at endpoint ${req.originalUrl}.`
    fs.appendFileSync('./logs.txt', `${logMessage}\n`, 'utf-8')
    console.log(logMessage)
    next()
}

module.exports = {
    auth,
    loggerMiddleware,
    JWT_SECRET
}

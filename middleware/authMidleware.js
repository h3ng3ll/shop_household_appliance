
const jwt = require("jsonwebtoken")
module.exports = function(req , res , next) {
    /// must be methods POST , GET , DELETE , PUT
    if(req.method === "OPTIONS"){ 
        next()
    } 
    try {
        const token = req.headers.authorization.split(' ')[1] // Bearer fksajlfjd
        if(!token) {
            return res.status(401).json({"message" : "Not authorizated"})
        } 
        const decoded = jwt.verify(token, process.env.JWT_PASS)
        req.user = decoded;
        next()
    } catch (e) {
        res.status(403).json({message: "Not authorizated"})
    }
}
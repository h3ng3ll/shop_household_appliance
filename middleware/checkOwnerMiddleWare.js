
module.exports = function(req , res , next){
   
   const  isSameOwner = req.user.user_id === req.body.user_id 
   const  isSameRole = req.user.role === req.body.role  

    if(isSameOwner && isSameRole){
        next()
    } else {
        res.status(403).json({messsage: "Permission Denied"})
    }

}
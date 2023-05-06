const jwt =require("jsonwebtoken")
const auth=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        try {
            const decoded=jwt.verify(token.split(" ")[1],'pritam')
            // console.log(decoded)
            if(decoded){
                req.body.userId=decoded.userId
                next()
            }else{
                res.send({"msg":"please Login"})
            }
        } catch (err) {
            console.log(err)
        }
    }else{
        res.send({"msg":"please Login"})
    }
}
module.exports={auth}
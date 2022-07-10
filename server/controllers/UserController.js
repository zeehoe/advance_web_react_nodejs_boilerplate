const bcrypt = require("bcrypt")
const UserModel = require("../models/UserModel")

module.exports.register = async (req,res,next) => {
    try{
        const { username, email, password } = req.body
        const usernameCheck = await UserModel.findOne({username})
        
        if (usernameCheck){
            return res.json({msg:"Username already used",status:false})
        }
        const emailCheck = await UserModel.findOne({email})
        if (emailCheck){
            return res.json({msg:"Email already used",status:false})
        }
    
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await UserModel.create({
            email,
            username,
            password:hashedPassword
        })
        user.password = undefined // remove this property before sending back to frontend
        return res.json({msg:"successful",status:true,user})
    }catch (ex){
        next(ex)
    }
}

module.exports.login = async (req,res,next) => {
    try{
        const { username, password } = req.body
        // the variable name here is what will be show in the json file
        const user = await UserModel.findOne({username})
        
        if (!user){
            return res.json({msg:"Incorrect username or password",status:false})
        }
        const isPassValid = await bcrypt.compare(password,user.password)
        if (!isPassValid){
            return res.json({msg:"Incorrect username or password",status:false})
        }
        user.password = undefined // remove this property before sending back to frontend
        console.log(user)
        return res.json({msg:"successful",status:true,user})
    }catch (ex){
        next(ex)
    }
}
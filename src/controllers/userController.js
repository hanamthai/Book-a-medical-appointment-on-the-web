import userService from '../services/userService'

let handleLogin = async(req,res) => {
    let email = req.body.email;
    let password = req.body.password;

    //access_token: JWT json web token
    if(!email || !password){
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameter!!!'
        })
    }
    let userData = await userService.handelUserLogin(email,password);

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}



module.exports = {
    handleLogin: handleLogin,
}
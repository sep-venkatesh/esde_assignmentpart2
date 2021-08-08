module.exports.loginError = function(){
return {
    message:'invalid login credentials',
    statusCode:401
}

}
module.exports.uploadError = function(){
    return {
        message:'unable to complete file upload operation',
        statusCode:500
    }
    
    }
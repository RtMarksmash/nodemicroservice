exports.succes = function(req,res,message,status){
    const StatusCode = status || 200
    const StatusMessage = message || ''

    res.status(status).send({
        error: false,
        status: status,
        body: message
    })

} 

exports.error = function(req,res,message,status){
    const StatusCode = status || 500
    const StatusMessage = message || 'internal server error'

    res.status(status).send({
        error: false,
        status: status,
        body: message

    })

}
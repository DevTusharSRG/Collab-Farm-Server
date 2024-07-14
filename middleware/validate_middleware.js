const validate = (schema) =>async (req,res,next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (err) {
        status = 422
        const message= "fill the input filds proprerly"
        const extraDetails = err.errors[0].message
        const error = {
            status,
            message,
            extraDetails,
        }
        console.log(message,error);
        // res.status(400).json({msg:message})
        next(error)
    }
}

module.exports = validate
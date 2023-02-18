const createError = require('http-errors')
const axios = require('axios')

async function validateToken(req, res, next) {
    const authorization = req.headers.authorization;
    if (!authorization) {
        next(createError(403, "No Authorization Header"));
    }
    try {
        const token = authorization?.split("Bearer ")[1];
        if(token === undefined) {
            return next(createError(403, "Invalid Token Format"));
        }
        let res = await thirdPartyValidation(token);
        if(res.code !== 200){
            return next(createError(res.code, res.message));
        }
        return next();
    } catch {
        next(createError(403, "Invalid Token Format"));
    }
}

async function thirdPartyValidation(token){
    try{
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.get("http://localhost:8001/api/user/partner/get-profile-with-auth",config);
        return {
            code: response.data.code,
            message: response.data.message
        }
    }catch(err){
        return {
            code: 500,
            message: err.message
        }
    }

}

module.exports = validateToken;

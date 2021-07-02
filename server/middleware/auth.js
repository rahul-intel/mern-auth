import jwt from 'jsonwebtoken';

const secret = 'test';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        //check if user comes from our site or from google.
        const isManualToken = token.length < 500;

        let decodeData;

        if(token && isManualToken){
            decodeData = jwt.verify(token, secret);
            req.userId = decodeData?.id;
        } else {
            decodeData = jwt.decode(token);
            req.userId = decodeData?.sub;
        }
        next();
    } catch (error) {
        console.log(error);
    }
}
export default auth;
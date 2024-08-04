import bcrypt from 'bcryptjs'
import 'dotenv/config.js'
import jwt from 'jsonwebtoken'

const hashPassword = async(password)=>{
    try {
        let salt =  await bcrypt.genSalt(Number(process.env.SALT))
        let hashedPassword = await bcrypt.hash(password,salt)
        return hashedPassword

    } catch (error) {
        throw error
    }
}

const hashCompare = async(password,hashedPassword)=>{
    try {
       return await bcrypt.compare(password,hashedPassword)
    } catch (error) {
        throw error
    }
}

const createToken = async(payload)=>{
    try {
        return await jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {expiresIn:'5m'}
        )
     } catch (error) {
         throw error
     }
}

const decodeToken = async(token)=>{
    try {
        return await jwt.decode(token)
     } catch (error) {
         throw error
     }
}

export default {
    hashPassword,
    hashCompare,
    createToken,
    decodeToken
}
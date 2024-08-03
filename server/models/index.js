import 'dotenv/config'
import mongoose from 'mongoose'
const MONGODB_URL = process.env.MONGODB_URL
const MONGODB_DB = process.env.MONGODB_DB

const URL = `${MONGODB_URL}/${MONGODB_DB}`

mongoose.connect(URL)
.then(()=>console.log('MongoDB connected successfully'))
.catch(error=>console.log('MongoDB connection failed',error))

export {mongoose}
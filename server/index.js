import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import Routes from './routes/index.js'

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.use(Routes)

app.listen(PORT,()=>console.log(`Server Running at port ${PORT}`))
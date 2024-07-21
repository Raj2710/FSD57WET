import express from 'express'
import 'dotenv/config.js'
import cors from 'cors'
import Routes from './src/routes/index.js'

const PORT  = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.use(Routes)


app.listen(PORT,()=>console.log(`Server listening at port ${PORT}`))
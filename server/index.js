import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
const env = require('')
// app.use (express.static (path.join (__dirname, '/public')))

const app = express()
app.use(express.json({limit:'30mb',extended:true}))
app.use(morgan('dev'))
app.use(express.urlencoded({limit:'30mb',extended:true}))
app.use(cors())
app.use(express.static('public'))
app.use(cookieParser())

import adminRouter from './routes/adminRoutes.js'
import userRouter from './routes/userRoutes.js'
import proRouter from './routes/professionalRoutes.js'

app.use('/admin',adminRouter)
app.use('/',userRouter)
app.use('/professional',proRouter)

const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/guild_hub',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
   
app.listen(port,()=>{
    console.log(`express app listening on port${port}` );
})
}).catch((error)=>{console.log(`${error} did not connect`);})


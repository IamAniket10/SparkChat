const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/connectDB')
const router = require('./routes/index')
const cookiesParser = require('cookie-parser')
const { app, server } = require('./socket/index')

//const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookiesParser())

app.options('*', cors())


app.use(function(request, response, next) {
  response.header('Access-Control-Allow-Origin', 'https://spark-chat-frontend.vercel.app')
  response.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, client-security-token')
  next()
})

const PORT = process.env.PORT || 8080

// app.get('/',(request,response)=>{
//     response.json({
//         message : "Server running at " + PORT
//     })
// })

app.get('/', (request, response) => {
    response.send('Hello World!')
})


//api endpoints
app.use('/api',router)

connectDB().then(()=>{
    server.listen(PORT,()=>{
        console.log("server running at " + PORT)
    })
})

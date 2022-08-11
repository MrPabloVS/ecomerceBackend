//import 'dotenv/config'
import express from 'express'
import { getError } from './errorCatcher.js'
import http from 'http'
import path from 'path'
import {fileURLToPath} from 'url';
import { Server}  from "socket.io"
import { userRouter } from './routes/userRoutes.js';
import { productRouter } from './routes/productsRoutes.js';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { chatRouter } from './routes/chatRoutes.js'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'


dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)





const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 8000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(cookieParser())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000 "); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(session({
  secret: "secreto",
  resave: true,
  saveUninitialized: true
}))


//const httpServer = http.createServer(app)
const io = new Server(server)


app.use('/api', productRouter)
//app.use('/api', cartRouter)
app.use('/api', userRouter)
app.use('/api', chatRouter)
app.get("/session", (req, res)=>{
    console.log(req.session)
    jwt.verify(req.session.token, "claveJWT", (err, decoded) => {
      // if (err) {
      //   res.send(err)
      // } else {
      //   res.send(decoded)
      // }
    })
    console.log(req.cookies.token)
    res.send({session: req.session.token, cookie: req.cookies.token})
    
    // jwt.verify(req.body.token, "claveJWT", (err, decoded) => {
        
    //     if (err) {
    //        res.send(err)
    //      } else {
    //        res.send(decoded)
    //      }
    //    })

})

mongoose
  .connect(process.env.MONGOURI || "mongodb+srv://PabloVS:coderhouse@cluster0.lbjiod0.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log(err))

io.on("connection", socket => {
  
  socket.on("conectado", ()=>{
    console.log("conectado a io")
  })

  socket.on("mensaje", (nombre, mensaje) => {
    io.emit("mensajes", {nombre, mensaje})
  })


})

app.use(function (err, req, res, next) {
  const error = getError(err.code, err.message)
  console.log(err)
  res.status(error.status).send(error)
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `)
})

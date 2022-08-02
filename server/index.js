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

dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)





const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 8000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "..", "build")));
//app.use(express.static("public"));

const httpServer = http.createServer(app)
const io = new Server(httpServer)


app.use('/api', productRouter)
//app.use('/api', cartRouter)
app.use('/api', userRouter)

mongoose
  .connect(process.env.MONGOURI || "mongodb+srv://PabloVS:coderhouse@cluster0.lbjiod0.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log(err))

io.on("connection", socket => {
  // console.log("SocketIO Connected!");
  // const messages = JSON.parse(fs.readFileSync("mensajes.json", utf));
  // mensajesDB = messages;
  // socket.emit("initial", messages);
  // socket.on("sendMessage", (data) => {
  //     data.timestamp = (new Date).toLocaleString();
  //     mensajesDB.push(data);
  //     io.sockets.emit("shareMessages", mensajesDB);
  //     fs.writeFileSync("mensajes.json", JSON.stringify(mensajesDB), utf);
  // });
})

app.use(function (err, req, res, next) {
  const error = getError(err.code, err.message)
  console.log(err)
  res.status(error.status).send(error)
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `)
})

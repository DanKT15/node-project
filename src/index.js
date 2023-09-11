import express from "express"
import dotenv from "dotenv"
import configViewEngine from "./config/viewEngine"
import initWebRoute from "./router/webRoute"
import path from "path"
import bodyParser from "body-parser"

const app = express()

dotenv.config() // cấu hình port trong .env
const port = process.env.PORT


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

configViewEngine(app) // khởi tạo viewEngine

app.use('/static', express.static(path.join(__dirname,'public'))) // thêm "/static" vào link ảnh vd:"/static/img/h1.jpg"

initWebRoute(app) // khởi tạo router

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
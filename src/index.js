import express from "express"
import dotenv from "dotenv"
import configViewEngine from "./config/viewEngine"
import initWebRoute from "./router/webRoute"
import path from "path"

const app = express()

dotenv.config() // cấu hình port trong .env
const port = process.env.PORT

configViewEngine(app) // khởi tạo viewEngine
app.use(express.static(path.join(__dirname, 'public')))
initWebRoute(app) // khởi tạo router

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
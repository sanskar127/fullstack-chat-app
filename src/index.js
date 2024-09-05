// import { App, server, express } from "./socket/socket.js"
import cookieParser from "cookie-parser"
import { fileURLToPath } from "url"
import express from "express"
import dotenv from "dotenv"
import path from "path"

import messageRoutes from "./routes/message.routes.js"
import connectionDB from "./database/connectionDB.js"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const App = express()
// Express middleware
App.use(express.json()) // to parse incoming requests with json payloads
App.use(cookieParser()) // CookieParser
App.use(express.static(path.join(__dirname, '../public')));

dotenv.config()
// Environmental Variables
const PORT = process.env.PORT

// Routes
App.use('/api/auth', authRoutes)
App.use('/api/message', messageRoutes)
App.use("/api/users", userRoutes)
App.post('/api/test', (req, res) => {
    const { message } = req.body
    res.json({ message: message })
    console.log(message)
})

// Starting Server
App.listen(PORT, () => {
    connectionDB()
    console.log(`Live on http://localhost:${PORT}`)
})
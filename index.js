import { App, server, express } from "./socket/socket.js"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

import messageRoutes from "./routes/message.routes.js"
import connectionDB from "./database/connectionDB.js"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"

// Express middleware
App.use(express.json()) // to parse incoming requests with json payloads
App.use(cookieParser()) // CookieParser

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
server.listen(PORT, () => {
    connectionDB()
    console.log(`Live on http://localhost:${PORT}`)
})

import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import authRoutes from "./routes/auth.routes.js"
import connectionDB from "./database/connectionDB.js"

// Initializing Express App
const App = express()

// Express middleware
App.use(express.json()) // to parse incoming requests with json payloads

// CORS Policy
App.use(cors())

dotenv.config()
// Environmental Variables
const PORT = process.env.PORT

// Routes
App.use('/api/auth', authRoutes)

// Starting Server
App.listen(PORT, () => {
    connectionDB()
    console.log(`Live on http://localhost:${PORT}`)
})

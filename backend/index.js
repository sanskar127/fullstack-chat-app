import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import authRoutes from "./routes/auth.routes.js"

// Initializing Express App
const App = express()

// CORS Policy
App.use(cors())

dotenv.config()
// Environmental Variables
const PORT = process.env.PORT

// Routes
App.use('/api/auth', authRoutes)

// Starting Server
App.listen(PORT, () => console.log(`Live on http://localhost:${PORT}`))
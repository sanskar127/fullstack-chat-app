import express from "express"
import { sendMessage } from "../controllers/message.controller.js"
import protectRoute from "../middlewares/protectRoute.middleware.js"

const Router = express.Router()

Router.post('/send/:id', protectRoute, sendMessage)

export default Router
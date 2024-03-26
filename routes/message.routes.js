import express from "express"
import { receiveMessage, sendMessage } from "../controllers/message.controller.js"
import protectRoute from "../middlewares/protectRoute.middleware.js"

const Router = express.Router()

Router.post('/sendto/:id', protectRoute, sendMessage)

Router.get('/:id', protectRoute, receiveMessage)

export default Router
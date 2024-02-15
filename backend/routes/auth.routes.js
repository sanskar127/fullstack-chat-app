import express from "express"

const Route = express.Router()

Route.get('/login', (req, res) => {
    res.send("Login")
})

export default Route
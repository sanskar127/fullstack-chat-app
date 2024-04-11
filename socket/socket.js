import { Server } from "socket.io"
import http from "http"
import express from "express"

const App = express()
const server = http.createServer(App)
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
})

io.on('connection', socket => {
    console.log('a user connected', socket.id)

    // socket.on is used to listen to the events. can be used on both clientside and serverside
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

export { App, io, server, express }
import { Server } from "socket.io"
import { createServer } from "http"
import express from "express"

const App = express()
const server = createServer(App)
const io = new Server(server)

export const getReceiverSocketId = receiverId => userSocketMap[receiverId]

const userSocketMap = {} // {userId: socketId}

io.on('connection', socket => {

    const userId = socket.handshake.query.userId

    if (userId !== undefined) { userSocketMap[userId] = socket.id }

    io.emit("getOnlineUsers", Object.keys(userSocketMap))

        socket.on('disconnect', () => {
        delete userSocketMap[userId]
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})

export { App, io, server, express }
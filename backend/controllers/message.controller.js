import Chat from "../models/chat.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        // const senderId = req.user._id
        const senderId = "65d0a11b40be130af0d63906"
        
        let chat = await Chat.findOne({ participants: { $all: [senderId, receiverId] } })

        if (!chat) {
            chat = await Chat.create({ participants: [senderId, receiverId] })
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        })

        if (!newMessage) {
            chat.message.push(newMessage._id)
        }

        res.status(201).json(newMessage)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
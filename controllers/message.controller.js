import Chat from "../models/chat.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id

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

        // using a promise
        await Promise.all([chat.save(), newMessage.save()])

        res.status(201).json(newMessage)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const receiveMessage = async (req, res) => {
    try {
        // const { id: userToChatId } = req.body
        const senderId = req.user._id

        console.log(req.user)
        // const chat = await Chat.findOne({ 
        //     participants: { $all: [senderId, userToChatId] } 
        // }).populate("messages")

        // res.status(200).send(chat)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

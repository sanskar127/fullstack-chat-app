import { useSelector } from "react-redux";
import { PropTypes } from "prop-types"
import extractTime from "../utils/extractTime"

const Message = ({ message }) => {
  // authUser selectedConversation
  const authUser = useSelector(state => state.auth.user)
  const selectedConversation = useSelector(state => state.conversation.selectedConversation)

  const me = message.senderId === authUser._id
  // const chatTo = message.senderId === authUser._id && message.receiverId === selectedConversation
  const chatClassName = me ? "chat-end" : "chat-start"
  const bubbleBgColor = me ? "bg-blue-500" : ""

  console.log({
    senderid: authUser._id,
    receiverid: me
  })

  return (
    <div className={`chat ${chatClassName}`}>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center"> {extractTime(message.createdAt)} </div>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.array.isRequired,
}

export default Message

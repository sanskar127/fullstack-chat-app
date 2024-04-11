import { useSelector } from "react-redux";
import { PropTypes } from "prop-types"
import extractTime from "../utils/extractTime"

const Message = ({ message }) => {
  // authUser selectedConversation
  const authUser = useSelector(state => state.auth.user)

  const me = message.senderId === authUser._id
  const chatClassName = me ? "chat-end" : "chat-start"
  const bubbleBgColor = me ? "bg-blue-500" : ""

  return (
    <div className={`chat ${chatClassName}`}>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center"> {extractTime(message.createdAt)} </div>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
}

export default Message

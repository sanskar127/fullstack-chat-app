import Conversation from "./Conversation"
import useGetConversations from "../hooks/useGetConversations"

const Chats = () => {
  const { conversations, loading } = useGetConversations()

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {/* <Conversation/> */}
      {conversations.map((item, index) => {
        return <Conversation
          key={item._id}
          conversation={item}
          lastIndex={index === item.length - 1}
        />
      })}
      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}

export default Chats

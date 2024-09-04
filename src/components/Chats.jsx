import Conversation from "./Conversation"
import useGetConversations from "../hooks/useGetConversations"
import { useSelector } from "react-redux"

const Chats = () => {
  const { conversations, loading } = useGetConversations()
  const search = useSelector(state => state.search.value)

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((item, index) => {
        const fullname = item.fullname.toLowerCase()
        const username = item.uname.toLowerCase()
        if (search.length > 2 && (fullname.includes(search) || username.includes(search))) {
          return <Conversation
            key={item._id}
            conversation={item}
            lastIndex={index === item.length - 1}
          />
        }

        if (search.length === 0) {
          return <Conversation
            key={item._id}
            conversation={item}
            lastIndex={index === item.length - 1}
          />
        }

      })}
      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}

export default Chats

import { useSelector } from "react-redux";
import useGetMessages from "../hooks/useGetMessages";
import Message from "./Message";
import { useEffect, useRef } from "react";

const Messages = () => {
  const { loading } = useGetMessages();
  const messages = useSelector((state) => state.conversation.messages);
  const tempMessages = messages && messages[0]; // Ensure messages is not undefined
  const lastMessageRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" })
    }, 50);
  }, [tempMessages, messages])

  return (
    <div className="px-4 flex-1 overflow-auto">
      <div className="space-y-4">
        {tempMessages &&
          tempMessages.map((message) => (
            <div key={message._id}>
              <Message message={message} />
            </div>
          ))}
        {!loading && messages.length === 0 && (
          <p className="text-center">Send a message to Start a Conversation</p>
        )}
      </div>
    </div>
  );
};

export default Messages;

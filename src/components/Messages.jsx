import useGetMessages from "../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessages()

  return (
    <div className="px-4 flex-1 overflow-auto">
      <div className="space-y-4">
        {messages.map((message) => (
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

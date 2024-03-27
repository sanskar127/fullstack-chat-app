import Message from "./Message"

const Messages = () => {
  return (
    <div className="px-4 flex-1 overflow-auto">
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <Message key={index} position={index % 2 == 0 ? "start": "end"} />
        ))}
      </div>
    </div>
  );
};

export default Messages;

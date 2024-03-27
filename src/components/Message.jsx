
const Message = () => {
  return (
    // <div className="chat chat-end">
    //   <div className="chat-bubble text-white bg-blue-500">Hello There</div>
    //   <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    // </div>
    <>
      <div className="chat chat-start">
        <div className="chat-bubble">Its over Anakin, <br />I have the high ground.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble text-white bg-blue-500">You underestimate my power!</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          Seen at 12:46
        </div>
      </div>
    </>
  )
}

export default Message

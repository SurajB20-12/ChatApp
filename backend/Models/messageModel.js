const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }, //Id of the user who sent the message
    content: { type: String, trim: true }, //Text content of the message
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
    }, //Id of the chat to which the message belongs
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;

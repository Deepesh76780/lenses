const expressAsyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");

const sendMessage = expressAsyncHandler(async (req, res) => {
  const { content, chatId } = req.body;
  if (!message || chatId) {
    res.status(400).send("Message or ChatId is missing");
  }

  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);
    message = await message.populate("sender", "name pic").execPopulate();
    message = await message.populate("chat").execPopulate();
    message = await message
      .populate(message, {
        path: "chat.users",
        select: "name pic email",
      })
      .execPopulate();
    res.send(message);

    await Chat.findByIdAndUpdate(req.body.chatId, {
      latestMessage: message,
    });

    res.json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = { sendMessage };

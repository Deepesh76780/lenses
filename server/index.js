const express = require("express");
const app = express();
const moongose = require("moongoose");
require("dotenv").config();
const { chats } = require("./data/data");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const id = req.params.id;
  const singleChat = chats.find((c) => c._id === id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 3000;

const start = () => {
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
};

start();

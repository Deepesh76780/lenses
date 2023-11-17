const express = require("express");
const app = express();
require("dotenv").config();
const { chats } = require("./data/data");
const { connect } = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

connect();
app.use(express.json()); //to except json data
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const start = () => {
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
};

start();

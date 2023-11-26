const express = require("express");
const protect = require("../middleware/authMiddleware");
const router = express.Router();
const { sendMessage } = require("../controllers/messageControllers");

router.route("/").post(protect, sendMessage);
// router.route("/").get(protect, (req, res) => {
module.exports = router;

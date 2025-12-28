const express = require("express");
const router = express.Router();
const { protect } = require("../Middlewares/authMiddleware");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameChat,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatController");

router.post("/", protect, accessChat); //accessing or creating chat
router.get("/", protect, fetchChats); // get all of the chat from DB for that perticular grp
router.post("/group", protect, createGroupChat); // create new group chat
router.put("/rename", protect, renameChat); // rename group chat
router.put("/groupadd", protect, addToGroup);
router.put("/groupremove", protect, removeFromGroup);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const { protect } = require("../Middlewares/authMiddleware");

router.post("/", registerUser);
//search User
router.get("/", protect, allUsers);
router.post("/login", authUser);
module.exports = router;

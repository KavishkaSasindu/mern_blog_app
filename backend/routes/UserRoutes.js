const express = require("express");

const router = express.Router();

const {
  register,
  logIn,
  userProfile,
  changeUserAvatar,
  userProfileDetailsChange,
  getAvatar,
} = require("../controller/UserController");

const upload = require("../middleware/UserMiddleware");

router.post("/api/user/register", register);
router.post("/api/user/logIn", logIn);
router.get("/api/user/:id", userProfile);
router.post("/api/user/changeAvatar", upload.single("file"), changeUserAvatar);
router.put("/api/user/edit", userProfileDetailsChange);
router.get("/api/user/getAvatar", getAvatar);

module.exports = router;

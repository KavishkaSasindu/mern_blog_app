const express = require("express");

const router = express.Router();

router.get("/post", (request, response) => {
  return response.json({ message: "this is post routes" });
});

module.exports = router;

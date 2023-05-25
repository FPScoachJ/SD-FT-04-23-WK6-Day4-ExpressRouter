const express = require("express");
const router = express.Router();
const { Justin } = require("../../models")
//CRUD
router.get("/get_users", async (req, res) => {
  res.send("/get_users");
});
router.post("/post_users", async (req, res) => {
  const {name} = req.body;
  const newUser = await Justin.create({
    name: name,
  })
    res.send(`User Created`);
});
router.put("/put_users", (req, res) => {
  res.send("/get_users");
});
router.delete("/delete_users/:id", (req, res) => {
  const { id } = req.params;
  res.send("/delete_users");
});

module.exports = router;

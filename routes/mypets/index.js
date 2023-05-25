const express = require("express");
const router = express.Router();
const { JustinPet } = require("../../models");

//CRUD
router.get("/get_pets", (req, res) => {
  res.send("/get_pets");
});
router.post("/post_pets", async (req, res) => {
  const {name} = req.body;
  const newUser = await JustinPet.create({
    name: name,
  })
});
router.put("/put_pets", (req, res) => {
  res.send("/get_pets");
});
router.delete("/delete_pets/:id", (req, res) => {
  const { id } = req.params;
  res.send("/delete_pets");
});

module.exports = router;

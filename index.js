const express = require("express");
const app = express;
const users = require("./routes/users")
const PORT = 3011;

app.use("/user", users);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
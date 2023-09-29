const connectToMongo = require("./db");
const express = require("express");
connectToMongo();

const app = express();
const port = 5050;

app.use(express.json());

//Availabe Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.get("/", (req, res) => {
  res.send("Hello Kaushik!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

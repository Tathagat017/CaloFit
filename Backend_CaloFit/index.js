const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./configs/db");
const { userRouter } = require("./Routes/UserRoutes");
const { notesRouter } = require("./Routes/notesRoutes");
const { auth } = require("./middlewares/authenticator");

require("dotenv").config();
const port = process.env.PORT || 4500;

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use(auth);
app.use("/notes", notesRouter);

(async () => {
  try {
    await connection;
    console.log("Connected to DB");
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (e) {
    console.log("err", e);
  }
})();

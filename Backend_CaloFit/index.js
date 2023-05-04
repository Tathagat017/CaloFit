const express = require("express")
const app = express()
app.use(express.json())

const { AppModel } = require("./Model/UserModel")
// AppModel

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const cors = require("cors")
app.use(cors())

const { appRouter } = require("./Routes/UserRoutes")
const { postRouter } = require("./Routes/PostRoutes")
const { auth } = require("./middlewares/authenticator")

app.use("/users", appRouter)
app.use(auth)
app.use("/posts", postRouter)



//--------CONNECTION-------------------->
require("dotenv").config()
const { connection } = require("./configs/db")
app.listen(process.env.port || 4500, async () => {
    try {
        await connection;
        console.log('Connected to DB');

        console.log('Server Running at', `${process.env.port || 4800}`);
    } catch (e) {
        console.log('err', e);
    }
})
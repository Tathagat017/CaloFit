const express=require("express")
const cors=require("cors")
const { fruitsRoute } = require("./Routes/FoodRoutes/FruitRoutes")
const { connection } = require("./db")
const { vegetableRoute } = require("./Routes/FoodRoutes/vegetableRoutes")
const { dairysRoute } = require("./Routes/FoodRoutes/dairyRoutes")
const { meatsRoute } = require("./Routes/FoodRoutes/meatRoutes")
const { recipesRoute } = require("./Routes/FoodRoutes/recipeRoutes")
require("dotenv").config()
const app=express()
app.use(cors())
app.use(express.json())
app.use("/foods/fruits",fruitsRoute)
app.use("/foods/vegetables",vegetableRoute)
app.use("/foods/dairies",dairysRoute)
app.use("/foods/meats",meatsRoute)
app.use('/foods/recipes',recipesRoute)

app.get('/',(req,res)=>{
    res.status(200).send({"msg":"Home Page"})
})
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("server connected")
    } catch (err) {
        console.log(err)
        console.log("server not connected")
    }
    console.log(`server is running on ${process.env.port}`)
})
const express=require("express")
const cors=require("cors")
const { fruitsRoute } = require("./Routes/FoodRoutes/FruitRoutes")
const { connection } = require("./db")
const { vegetableRoute } = require("./Routes/FoodRoutes/vegetableRoutes")
const { dairysRoute } = require("./Routes/FoodRoutes/dairyRoutes")
const { meatsRoute } = require("./Routes/FoodRoutes/meatRoutes")
const { recipesRoute } = require("./Routes/FoodRoutes/recipeRoutes")
const { userRoute } = require("./Routes/UserRoutes")
const { planRoute } = require("./Routes/plan/plan.route")
const { auth } = require("./middleware/auth.middleware")
const { userPlanRoute } = require("./Routes/plan/userPlan.route")
require("dotenv").config()
const app=express()
app.use(cors())
app.use(express.json())
app.use("/foods/fruits",fruitsRoute)
app.use("/foods/vegetables",vegetableRoute)
app.use("/foods/dairies",dairysRoute)
app.use("/foods/meats",meatsRoute)
app.use('/foods/recipes',recipesRoute)
app.use("/users",userRoute)
app.use("/plans",planRoute)
app.use(auth)
app.use("/user_plan",userPlanRoute)

app.get("/", (req, res) => {
    const apiInstructions = `<pre>
    <h3>Backend api instruction:</h3>
    FOODS=>
      dairy->
        URL={BASEURL}/foods/dairies+{endpoint}
        endpoints=>
          1."/add"->It is a post request for create dairy documents
          2."/"->It is a get request for get all dairy documents
          3."/update/:Id" -> It is a patch request for update particular dairy documents.
          4."/delete/:Id" -> It is a delete request for delete particular dairy documents.
  
      fruits->
        URL={BASEURL}/foods/fruits{endpoint}
        endpoints=>
          1."/add"->It is a post request for create fruits documents
          2."/"->It is a get request for get all fruits documents
          3."/update/:Id" -> It is a patch request for update particular fruits documents.
          4."/delete/:Id" -> It is a delete request for delete particular fruits documents.
  
      vegetables->
        URL={BASEURL}/foods/vegetables{endpoint}
        endpoints=>
          1."/add"->It is a post request for create vegetables documents
          2."/"->It is a get request for get all vegetables documents
          3."/update/:Id" -> It is a patch request for update particular vegetables documents.
          4."/delete/:Id" -> It is a delete request for delete particular vegetables documents.
  
      meats->
        URL={BASEURL}/foods/meats{endpoint}
        endpoints=>
          1."/add"->It is a post request for create meats documents
          2."/"->It is a get request for get all meats documents
          3."/update/:Id" -> It is a patch request for update particular meats documents.
          4."/delete/:Id" -> It is a delete request for delete particular meats documents.
  
      recipes->
        URL={BASEURL}/foods/recipes{endpoint}
        endpoints=>
          1."/add"->It is a post request for create recipes documents
          2."/"->It is a get request for get all recipes documents
          3."/update/:Id" -> It is a patch request for update particular recipes documents.
          4."/delete/:Id" -> It is a delete request for delete particular recipes documents.
  
  FILTER=>
      URL={BASEURL}/foods/fruits{endpoint}?{query is data object,s key & value }
      Example:http://localhost:8080/foods/fruits?kcal=69&vita=0.8
  
  SORT=>
      URL={BASEURL}/foods/fruits{endpoint}?sortBy={dataObj key}&sortOrder={asc/desc}
      Example:http://localhost:8080/foods/fruits?sortBy=kcal&sortOrder=desc
  
  pagination=>
      URL={BASEURL}/foods/fruits{endpoint}?page={page no}&limit={limit of products}
      Example:http://localhost:8080/foods/fruits?page=2&limit=10
  
  It also provides total products, required page, page no.
  
  Example: http://localhost:8080/foods/fruits??sortBy=kcal&sortOrder=desc&kcal=69&page=1&limit=1
  [All filter,sort,pagination use at same time]</pre>`;
  
    res.send(apiInstructions);
  });
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
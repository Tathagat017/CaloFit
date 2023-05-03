CaloFit Backend :
db Name : CaloFit
collections : users,foods,excercises,Nutrition_user,payment

BMI - Body Mass Index:

Needed Routes :

1.  User Router :

    a) /user/register :- Hashing password

    b) /user/login : - jwt token(payload:user object {
    plan :pro/basic
    userId:
    })

    (we also check if the user is an admin, if true send to the admin console): via Frontend

    c) /user/admin

user.model=>{
name,email,password,plan,height: cms,weight: kgs,age:years,gender: male/female
}
//Ritesh Bhai -->USER Route
2.Food Router: <Protected Route : via Frontend> // we dont need to jwt token for these as we cab use auth state to save authentication
///this routes sends information about kcal, vitamins etc of the food
(ALL ARE GET ROUTES ONLY)
Food Router :

a)/food/fruits?fruit=apple&fruit=banana (with query) banana and apple : - reciepe : apple banana salad :=

b)/food/vegetables?vegetable=beans&vegetable=spinach (with query)

c)/food/dairy?product=milk&product=eggs (with query)

d)/food/chicken(with query)

e)/food/recipe(with query)

f) /food/addcustomfood :- recipe will added here (custome kcal)(POST)

Make Models-->
food.model=>{
{
name: Apple
kcal:
carb: 10
protien : 20
vitamnin A
vitamin D
vitamin C
vitamin E
mineral
fat
potassium,
}
}
//Food Route --> Pritam Bhai

3.Excercise Router :<Protected Route : via Frontend> // we dont need to jwt token for these as we cab use auth state to save authentication
(GET ROUTE ONLY)

a)/excercises?excercise=walking (query based) : important
b) /excercise/addnew (POST) : if time permits
walking,running,cycling ,dance,weight Lifting,

Model = {
excercise_name: "walking",
hard_kcal/min: 19,
easy_kcal/min:10

}
Excerise Router : Tathagat

important : excercise time = kcal/min \* number_of_minutes(frontend)

4.Nutrition Intake Route: <Protected Routes : Backend (needs jwt token )> //This route is protected via backend and Frontend
// relational routes with user - user should get details of only food that he has saved
//Our Auth middleware will add userId to req.body and get only details of the user
Nutrition intake Router for each user:
// daily intake collection : - user (userID(Auth + req.body) - ovject )
/intake/sumtillnow :- food value eaten till now (GET)
/intake/dailygoal :- daily goal set so far (GET/POST)
/intake/addnewfood_recipe :- food eaten can be added (POST) : add food -> route this
/intake/excercise_user :- excercise will add here, removing food value from sumtillnow (POST) -> route this
/intake/food_consumed:

user_excercise Model={
kcal_consumed_eaten:
excercise_done: excercise_user_Id
time_done: time_done -->total
total_consumed: kcal_consumed_eaten-excercise_done(totl kc\* time_done)
daily_goal:
food_recipe_added: food_ID
}
//Nurtition Route --> Tathaagt/Pritam 5. Note Router: <Protected Routes : Backend (needs jwt token )> //This route is protected via backend and Frontend

/notes->get all notes
/notes/addnote :- add new note

Model={
title:"",
body:"",
userID:"",
}
//Notes--> Ritesh 5.
Payment_Route :- This route will handle payment related opertions (history, add new payment, change plan) : not important

/payment/history :- History (GET) : plan : pro, paid: 2000, date: date.now, method: googlePAy
/payment/changeplan/newpayment/:id :- new payment for changing plan (POST/PATCH)
//Pritam Bhai-->Payment

---

User Flow
Landing Page -> Register (/users/registers)->login(/users/login)->check if user or admin? --> if admin , route to admin component via frontend -> if user get login token --> save token in frontend --<>

Dashboard-> foods --> get request Foods --> /food/fruits , food/vegetables etc -->Protected route via both frontend and backend--> POST /intake/food_consumed:--> kcal saved.

Note for frontend : implement categories in box model like excercise (have icons) : fruits, vegetables, dairy, etc.
Each Category gets opened on clicking and shows food type of that category to select.

Dashboard->excercise --> get request(excercise)--> Click on category icon(walking,running etc)-> add that excercise, and open drawer menu with form to choose : effort (hard or light) and Time done(in mins)--> Calculate calories burnt by => excercise_kcal_value/min : time_done(min) --> POST(intake/excercise_user)

Dashboard->Show user added food and excerscise, calculate total kcal eaten, calculate total calories burn, calculate total_kcal_value; --> Show Food and excerscise done(show food eaten , excerscise done).

Implement chart in chart.js with above .

show total mineral,vitamin etc from user_data

Add notes-> Post -> to add note and GET to get all notes (as soon as clicked render get notes ) and have to add new note.

//Logout button

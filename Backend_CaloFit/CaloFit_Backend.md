CaloFit Backend :
db Name : CaloFit
collections : users,foods,excercises,Nutrition_user,payment
Needed Routes :

1.  User Router :

    a) /user/register :- Hashing password

    b) /user/login : - jwt token(payload:user object {
    role:user/admin
    plan :pro/basic
    userId:
    })

    (we also check if the user is an admin, if true send to the admin console): via Frontend

    c) /user/admin

2.Food Router: <Protected Route : via Frontend> // we dont need to jwt token for these as we cab use auth state to save authentication
///this routes sends information about kcal, vitamins etc of the food
(ALL ARE GET ROUTES ONLY)
Food Router :

a)/food/fruits?fruit=apple&fruit=banana (with query)

b)/food/vegetables?vegetable=beans&vegetable=spinach (with query)

c)/food/dairy?product=milk&product=eggs (with query)

d)/food/chicken(with query)

e)/food/recipe(with query)

3.Excercise Router :<Protected Route : via Frontend> // we dont need to jwt token for these as we cab use auth state to save authentication
(GET ROUTE ONLY)
a)/excercises?excercise=walking (query based)

4.Nutrition Intake Route: <Protected Routes : Backend (needs jwt token )> //This route is protected via backend and Frontend
// relational routes with user - user should get details of only food that he has saved
//Our Auth middleware will add userId to req.body and get only details of the user
Nutrition intake Router for each user:

    /intake/sumtillnow :- food value eaten till now (GET)
    /intake/dailygoal  :- daily goal set so far (GET/POST)
    /intake/addnewfood :- food eaten can be added (POST)
    /intake/excercise  :- excercise will add here, removing food value from sumtillnow (POST)
    /intake/addcustomfood :- recipe will added here (custome kcal)(POST)

5. Payment_Route :- This route will handle payment related opertions (history, add new payment, change plan)

/payment/history :- History (GET)
/payment/changeplan/newpayment/:id :- new payment for changing plan (POST/PATCH)

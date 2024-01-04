//To create server declare varieables that; 'require' express and calls express
const express = require('express');
//calling express as a function creates an application that allows the server set up
const app = express();

app.use(express.static('public'))

//allows access to info coming from forms 
app.use(express.urlencoded({ extended:true}))

app.use(express.json())

//tell app to use ejs view engine using set method. takes 2 params, varname and engine (ejs)
app.set('view engine', 'ejs')

const userRouter = require('./routes/users');
const e = require('express');

//tell app when url ending with /users append userRouter 
app.use('/users', userRouter)
//run app on port 3000
app.listen(3000)
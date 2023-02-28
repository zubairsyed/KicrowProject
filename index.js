// importing packages

// dotenv : this package makes our data secure
require("dotenv").config();

// express
const express = require('express');
const app = express();

//mongoose package database packge
const mongoose = require('mongoose');

//session package
const session = require('express-session');

// path that helps in navigating files
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

// whatever the port is available otherwise 2000 is used 
const port=process.env.PORT || 2000;


// Database connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error)=>{
    console.log(error)
})
db.once('open', ()=>{console.log("connected to DB")})


// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// express session middleware
app.use(session({
    secret: 'kicrox key',
    saveUninitialized: true,
    resave: false
}));

app.use((req, res, next)=>{
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
})



// to tell which folder static files are to be seen
app.use(express.static('./assets'));

// // extract style and scripts from sub pages into the layout
// app.set('layout extractStyles', true);
// app.set('layout extractScripts', true);

// using express router
app.use('/', require('./routes'));


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port,function(err){
    if(err){
        console.log(`error,${err}`);
    }
    console.log(`expres is fine: ${port}`)
})
const express = require('express');

const router = express.Router();
// const homeController = require('../controllers/home_controller');

console.log('router loaded');


// router.get('/', homeController.home);
// router.get("/", (req,res)=>{
//     res.render('home', { title: 'Kicrow',
//     Movies: "Movies",
//     Food: "Food",
//     UPIPAYMENTS: "UPI PAYMENTS",
//     Add: "ADD" })
// })

router.get("/", (req,res)=>{
    res.render('home', {title: "All Categories"});
})

router.get('/add', (req,res)=>{
    res.render('add_categories', {title: "Add categories"})
})

// update the application route

router.get('./edit/:id', (req,res)=>{
    id
});



// router.use('/users', require('./users'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;
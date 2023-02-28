const express = require('express');

const router = express.Router();

// getting Applicationschema
const User = require('../models/category');

// as we r using image using multar

const multer = require('multer');

// image upload
var storage = multer.diskStorage({
    destination: function(req, file, cb){ 
        cb(null, './uploads')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    },
});

var upload = multer({
    storage: storage,
}).single('image');

// Insert an user into DB route
router.post('/add', upload, (req, res) => {
    const user = new User({
        category: req.body.category,
        name: req.body.name,
        tag: req.body.tag,
        image: req.file.filename,

    })
    user.save().then((err) => {
        if(err){
            res.json({message: err.message, type: "danger"})
        }else{
            req.session.message = {
                type: 'success',
                message: 'Application Added successfully!!'
            }
            res.redirect('/')
        }
    })
})


console.log('router loaded');


// get all apps 
router.get("/", (req,res)=>{
    res.render('home', {title: "All Categories"});
})

router.get('/add', (req,res)=>{
    res.render('add_categories', {title: "Add categories"})
})

// update the application route

// router.get('./edit/:id', (req,res)=>{
//     let id=req.params.id;
//     Category.findById(id, (err, user)=>{
//         if(err){
//             res.redirect('/');
//         }else{
//             if(user == null){
//                 res.redirect('/');
//             }else{
//                 res.render('edit_apps',{
//                     title: "Edit Data"}
//                     )
//             }
//         }
//     })
// });


// update user route
// router.post('/update/:id', upload, (req,res)=>{
//     let id = req.params.id
// })



// router.use('/users', require('./users'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;
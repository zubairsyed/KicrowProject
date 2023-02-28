const mongoose = require('mongoose');


// creating schema for movie category
const appSchema = new mongoose.Schema({
    category: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    created: {
      type: Date,
      required: true,
      default: Date.now,
    }
    
  });

// creating schema for UPI payment category
// const upiSchema = new mongoose.Schema({
//     name: String,
//     category: String
// });
      
  
//   // creating schema for food category
//   const foodSchema = new mongoose.Schema({
//     name: String,
//     category: String
//   });
  

 module.exports = mongoose.model("User", appSchema);
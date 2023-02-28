const mongoose = require('mongoose');


// creating schema for movie category
const Categories = new mongoose.Schema({
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
  

  // create models for each category
  const Category = mongoose.model('Movie', Categories);
  // const Food = mongoose.model('Food', foodSchema);
  // const UpiPayment = mongoose.model('UpiPayment', upiSchema);

//   exporting all the schema's 
  module.exports = Category;
  // module.exports = Food;
  // module.exports = UpiPayment;
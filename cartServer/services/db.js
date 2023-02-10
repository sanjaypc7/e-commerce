// import mongoose

  const mongoose =require('mongoose');

//define the connection string

  mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('connected to mongodb');
  })

// Create a model for the produccts

  const Product=mongoose.model('Product',{
    //schema creation
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    rating:{
        rate:Number,
        count:Number
    }
  })
   //create a new collection in mongdb - create a model
const Wishlist=mongoose.model('wishlist',{
  id:Number,
  title:String,
  price:Number,
  image:String,
  description:String

})


  module.exports={
    Product,
    Wishlist
  }
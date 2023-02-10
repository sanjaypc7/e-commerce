// import db
  
  const { default: mongoose } = require('mongoose');
const db=require('./db');

// get all product details from db

const getProducts=()=>{
   return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                status:true,
                statusCode:200,
                products:result
                }
               
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'product not found'
                }
            }
        }

    )
}

//addtowishlist details store to db

const addtowishlist=(id,title,price,image,description)=>{
     return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                status:false,
                statusCode:401,
                message:'product already added to the wishlist'
                }
               
            }
            else{
                const newProduct=new db.Wishlist({
                    id,title,price,image,description
                })

                newProduct.save()
                return{
                    status:true,
                    statusCode:200,
                    message:'product added successfuly'
                    }
                   
            }
        }
     )
}

//get wishlist products details from db

const getwishlist=()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                status:true,
                statusCode:200,
                products:result
                }
               
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'wishlist is empty'
                }
            }
        }

    )
}

//delete wishlist product from db

const deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                status:true,
                statusCode:200,
                products:result,
                message:'product removed succesfuly',
                
                }
               
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'product not found'
                }
            }
        }
    )
}

module.exports={
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish
}
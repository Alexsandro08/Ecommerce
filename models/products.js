const mongoose = require('mongoose')
const Schema = mongoose.Schema



const Products = new Schema({
    title:{
        type:String
    },
    describe:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:Number
    }, 
    subprice:{
        type:String
    }
   
})

mongoose.model('products', Products)
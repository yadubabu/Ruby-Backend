import mongoose from 'mongoose';
import Vendor from './Vendor.js';

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:String,
        required:true,
    },
    category:{
        type:[{
            type:String,
            enum:['Veg','Non-Veg']
        }]
    },
    
    image:{
        type:String
    },
    bestSeller:{
        type:[{
            type:String,
            enum:['yes','no']
        }]
    },
    description:{
        type:String,

    },
    firm:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Firm"
        }]
})

const Product=mongoose.model('Product',productSchema)
export default Product
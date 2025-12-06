import mongoose from 'mongoose';
import Vendor from './Vendor.js';

const firmSchema=new mongoose.Schema({
    firmName:{
        type:String,
        required:true,
        unique:true
    },
    area:{
        type:String,
        required:true,
    },
    category:{
        type:[{
            type:String,
            enum:['Veg','Non-Veg']
        }]
    },
    region:{
        type:[{
            type:String,
            enum:['Indian','South-Indian','Chinees','Bakery']
        }]
    },
    offer:{
        type:String,
        },
    image:{
        type:String
    },
    vendor:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Vendor"
        }],
products:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }]
    })

const Firm=mongoose.model('Firm',firmSchema)
export default Firm
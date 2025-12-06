
import Vendor from '../models/Vendor.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const vendorRegister=async(req,res)=>{
    const {userName,email,password}=req.body;
    try{
      
        const hashedPassword=await bcrypt.hash(password,10)

            const newVendor=new Vendor({
                userName,
                email,
                password:hashedPassword
            });
            await newVendor.save();
            res.status(201).json({message:'registered successfully'})
   
        
    }
    catch(err){
        res.status(401).json({message:'Already taken'})
        console.log('Invalid Error',err);
        
    }
    
}

export const vendorLogin=async(req,res)=>{
    const {email,password}=req.body;
    const existVendor=await Vendor.findOne({email})
        const token=jwt.sign({userId:existVendor._id},process.env.SecretCode);               
        
        console.log(token);
        
    if(existVendor){
        if(await bcrypt.compare(password,existVendor.password)){

            
            return res.status(202).json({message:'Login successfully',token})
        }
        else{
            return res.send('Wrong Password')
  
        }
    }
    else{
        return res.send('Vendor not found')
    }
}

export const getAllVendors=async(req,res)=>{
    try{
        const vendors=await Vendor.find().populate('firm');
        res.json({vendors})
    }
 catch(err){
        res.status(401).json({message:'Internal Server Error'})
        console.log('Invalid Error',err);
        
    }}

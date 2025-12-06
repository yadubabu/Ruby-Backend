import Firm from "../models/Firm.js"
import Vendor from "../models/Vendor.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");       // folder name
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  
  }}
)


  const upload = multer({ storage:storage});


 const addFirm=async(req,res)=>{
    const {firmName,area,category,region,offer}=req.body;
    const image=res.file?req.file.filename:undefined;

    try{
       // const getFirm=await Firm.findOne({vendor:req.vendorId})
        // if(getFirm.firmName===firmName){
        //     return res.send('Firm name is already taken, Please try again with another name')
        // }
        const getVendor=await Vendor.findById(req.vendorId)
        if(!getVendor){
            return res.send('Vendor not found')
        }
        const newFirm=new Firm({
            firmName,
            area,
            category,
            region,
            offer,
            image,
            vendor:getVendor._id
        })
        const savedFirm=await newFirm.save();
        console.log(savedFirm,getVendor);
        getVendor.firm.push(savedFirm);
        await getVendor.save()
        //  await newFirm.save().then(()=>getVendor.firm.push(newFirm)).catch(err=>console.log(err))
                   

         return res.send('Add firm successfully')
    }
    catch(err){
        console.log(err);
        
    }
}
 export const addFirms={addFirm:[upload.single('image'),addFirm]};

export const editFirm=async(req,res)=>{
    const {firmName,area,category,region,offer,image}=req.body
    console.log(req.params.firmId);
    try{
        const getFirm=await Firm.findByIdAndUpdate(req.params.firmId,{
            firmName,
            area,
            category,
            region,
            offer,
            image
        })
        await getFirm.save();
        return res.send('Updated successfully')
    }
    catch(err){
        console.log(err);
        
    }
    
}

export const getAllFirms=async(req,res)=>{
    try{
        const allFirms=await Firm.find().populate('products');
        console.log(allFirms);
        
        return res.json(allFirms)
    }
    catch(err){
        console.log(err);
        
    }
}

export const getFirm=async(req,res)=>{
    try{
      const fetchFirm=await Firm.findById(req.params.firmId)
      await fetchFirm.save();
      return res.json({message:'Fetch Firm successfully',fetchFirm})
    }
    catch(err){
        console.log(err);
        
    }
}

export const deleteFirm=async(req,res)=>{
    try{
        const deleteFirm=await Firm.findByIdAndDelete(req.params.firmId)
        const fetchFirm=await Firm.find()
        return res.json({message:'Fetch Firm successfully',fetchFirm})
      }
      catch(err){
          console.log(err);
          
      }
}


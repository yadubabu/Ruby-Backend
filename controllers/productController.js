import multer from "multer";
import Firm from "../models/Firm.js";
import Product from "../models/Product.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");       // folder name
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  
  }}
)


  const upload = multer({ storage:storage});

export const addproduct=async(req,res)=>{
    const {productName,price,category,bestSeller,description}=req.body;
    const image=res.file?req.file.filename:undefined;
    const getFirm=await Firm.findById(req.params.id).populate('products')
        console.log(getFirm);
    try{
        const newProduct=new Product({
            productName,
            price,
            category,
            image,
            bestSeller,
            description,
            firm:req.params.id
        })
        await newProduct.save();sssssssss
        const savedProduct=await newProduct.save();
        getFirm.products.push(savedProduct);
        await getFirm.save();
        return res.send('Product added  successfully')

    }
    catch(err){
        res.send('Internal Server Error')
    }
}
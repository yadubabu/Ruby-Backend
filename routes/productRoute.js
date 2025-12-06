import { addproduct } from "../controllers/productController.js";

import express from 'express';

const router=express.Router();

router.post('/addProduct/:id',addproduct);


const productRoute=router;

export default productRoute

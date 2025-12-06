import express from 'express';
import {vendorRegister,vendorLogin, getAllVendors} from '../controllers/vendorController.js';
import vendorMiddleware from '../middlewares/vendorMiddleware.js';


const router=express.Router();

router.post('/register',vendorRegister);

router.route('/login').post(vendorLogin)

router.get('/allVendors',getAllVendors)

const vendorRoute=router

export default vendorRoute
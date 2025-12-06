import express from 'express';
import {addFirms,editFirm,deleteFirm,getAllFirms,getFirm} from '../controllers/firmController.js';
import vendorMiddleware from '../middlewares/vendorMiddleware.js';

const router=express.Router();


router.route('/addfirm').post(vendorMiddleware,addFirms.addFirm)
router.route('/editfirm/:firmId').put(vendorMiddleware,editFirm)
router.route('/deletefirm/:firmId').delete(vendorMiddleware,deleteFirm)
router.route('/allfirms').get(getAllFirms)
router.route('/getfirm/:firmId').get(vendorMiddleware,getFirm)

const firmRoute=router

export default firmRoute
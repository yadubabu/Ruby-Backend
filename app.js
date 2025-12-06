
import express from 'express';
import mongoose from 'mongoose';
import dotEnv from 'dotenv';
import bodyParser from 'body-parser';
import vendorRoute from './routes/vendorRoute.js'
import firmRoute from './routes/firmRoute.js'
import productRoute from './routes/productRoute.js';

const app=express();

dotEnv.config();

app.use(bodyParser.json())

const Port=process.env.PORT || 4001

mongoose.connect(process.env.MongodbURI).then(()=>console.log('DB connected Successfully')
).catch(err=>console.log('<h1>Something went wrong</h1>',err));

app.use('/vendor',vendorRoute);

app.use('/firm',firmRoute)

app.use('/product',productRoute)

app.get('/',async(req,res)=>{
    res.send('Welcome to Ruby-Vendor')
})


app.listen(Port,()=>console.log(`Server is running on the port ${Port}`))

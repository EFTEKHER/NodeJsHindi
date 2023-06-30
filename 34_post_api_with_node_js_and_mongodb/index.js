const express =require('express');
require('./config');
const Product=require('./product');


const app = express();
app.use(express.json())
app.post('/create',async(req,res)=>{

    let data= new Product(req.body);
    let result= await data.save();
    res.send(result);
    console.log(result);


} )
app.listen(5000);
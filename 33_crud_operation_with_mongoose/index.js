const mongoose=require('mongoose');

const main=async()=>{
 await mongoose.connect("mongodb://localhost:27017/e-comm");
 const ProductSchema= new mongoose.Schema(
    {
        name:String,
        price:Number
        //how many fields defined
    }
 );
 const productsModel= mongoose.model('products',ProductSchema)

 let data =new  productsModel({name:"m8", price:1000});
 let result= await data.save();

 console.log(result);

}
main();
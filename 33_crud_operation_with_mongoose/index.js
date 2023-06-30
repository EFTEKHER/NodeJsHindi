const mongoose=require('mongoose');
 mongoose.connect("mongodb://localhost:27017/e-comm");
 const ProductSchema= new mongoose.Schema(
    {
        name:String,
        price:Number,
        brand:String,
        category:String,
        //how many fields defined
    }
 );
const saveInDB=async()=>{
 
 const product= mongoose.model('products',ProductSchema)

 let data =new  product({name:"m8", price:1000,brand:"xYZ",category:"mobile"});
 let result= await data.save();

 console.log(result);

}
// saveInDB();
const updateInDB = async()=>{
const product= mongoose.model('Products',ProductSchema);
let data =await product.updateOne(
    {name: "note 8"},{
        $set:{name: "Redmi note 8",price:"700"}
    }
)
console.log(data);

}


updateInDB();
const deleteInDB=async()=>{
    const product= mongoose.model('Products',ProductSchema);
    const data= await product.deleteOne({name:'max pro 9'})
    console.log(data);
}
deleteInDB();

const findInDB=async()=>{
    const product= mongoose.model('Products',ProductSchema);
    let data=await product.find({name:"IPhone 12 pro"});
    console.log(data);
}
findInDB();
const express=require('express');

const dbConnect=require('./mongodb');

const app=express();
app.use(express.json());
app.get('/', async (req, res) => {
    let data= await dbConnect();
    data=await data.find().toArray();
    console.log(data);
    res.send(data)
});

app.post('/', async(req,res)=>{
    // console.log(req.body);
    let data= await dbConnect();
    let result= await data.insertOne(req.body);
    res.send(result);

   
})

// app.put("/",async(req,res)=>{
//     // console.log(req.body);
//     let data= await dbConnect();
//     let result= data.updateOne(
//         {name:req.body.name},{
//             $set:req.body
//         },
//         {ordered: true}
//     )

// res.send({result:"update"});

// })
//update name

app.put("/:name",async(req,res)=>{
    // console.log(req.body);
    let data= await dbConnect();
    let result= data.updateOne(
        {name:req.params.name},{
            $set:req.body
        },
        {ordered: true}
    )

res.send({result:"update"});

})
app.listen(5000);

const express=require('express');
const app=express(); //express

app.get('',(req,res)=>{
    console.log("data sent by browser ", req.query.name);
res.send('welcome, this is home page '+`<h1> ${req.query.name}</h1>`);

})

app.get('/about',(req,res)=>{
    res.send('Hello, this is about page');
})

app.get('/help',(req,res)=>{
    res.send('Hello, this is help page');
})


app.listen(4000);
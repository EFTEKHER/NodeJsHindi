const express=require('express');
const app=express(); //express

app.get('',(req,res)=>{
res.send('Hello, this is home page');

})

app.get('/about',(req,res)=>{
    res.send('Hello, this is about page');
})

app.get('/help',(req,res)=>{
    res.send('Hello, this is help page');
})

app.listen(5000);
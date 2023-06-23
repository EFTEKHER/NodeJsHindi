const express=require('express');
const app=express(); //express

app.get('',(req,res)=>{
    console.log("data sent by browser ", req.query.name);
res.send(`
<h1>welcome, this is home page  </h1>
<a  href="/about">Go to about page </a

`);

})

app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder="User Name" value=${req.query.name}/>
    <button>Click Me</button>
    <a  href="/">Go to Home page </a
    `);
})

app.get('/help',(req,res)=>{
    res.send({
        name:'efte',
        email:'efte@example.com'
    });
})


app.listen(4000);
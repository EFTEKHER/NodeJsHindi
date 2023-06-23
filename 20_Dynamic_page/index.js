const express= require('express');
const path= require('path');

const app= express();


const publicPath= path.join(__dirname, 'public');
app.set('view engine', 'ejs');
app.get('',(_,res)=>{
   res.sendFile(`${publicPath}/home.html`) 
})
app.get('/profile',(_,res)=>{
   const user={
      name:'eftekher ali efte',
      email:'efte200@gmail.com',
      city:'Dhaka',
      skills:['php','js','c++','java','javascript']
   }
   res.render('profile',{user});
})
app.get('/login',(_,res)=>{
    res.sender('login')
})

app.get('/about',(_,res)=>{
   res.sendFile(`${publicPath}/about.html`) 
})

app.get('/help',(_,res)=>{
    res.sendFile(`${publicPath}/help.html`) 
 })
 app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/pageNotfound.html`) 
 })
 
app.listen(4000);
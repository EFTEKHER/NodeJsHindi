const express=require('express');
const app=express();

const reqfilter=(req,res,next)=>{
    console.log('request filter');
    if(!req.query.age)
    {
        res.send('please provide  age');
    }
   else if(req.query.age<18)
    {
        res.send('you cannot access this page');
    }
    else{
        next();
    }
    
}

app.use(reqfilter)

app.get('/',(req, res) => {
res.send('wlcome to home page')

})
app.get('/users',(req, res) => {
    res.send('wlcome to users page')
    
    })
    

app.listen(5000);
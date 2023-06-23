const express=require('express');

const app= express();//execute

const path=require('path');

const publicPath=path.join(__dirname,'public');


app.use(express.static(publicPath));//static function








app.listen(5000)
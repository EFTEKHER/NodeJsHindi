const express = require("express");
const con = require("./config");
const app = express();
app.use(express.json());


app.put("/",(req,res)=>{
  const data=["tony","0000","reader",1]
  con.query("UPDATE users SET name = ?, password = ?, user_type = ? WHERE id = ?",
  data,(error,results,fields)=>{
    if(error) throw error;
    res.send(results)
  })
 
})


app.listen(5000);


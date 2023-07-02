const express = require("express");
const con = require("./config");
const app = express();

app.get("/", (req, res) => {
  // res.send("route done");
  con.query("SELECT * FROM users", (err, result) => {
    if (err) {
      res.send("err");
    } else {
      res.send(result);
    }
  });
});
app.post("/", (req, res) => {

    // id: 2,
    // name: "bhaskar",
    // password: "3030",
    // user_type: "visitor",

    var data="INSERT INTO users (id,name, password, user_type) VALUES (2,'bhaskar','3030', 'visitor')"

    


//   const data = {
    
//   };
//   con.query("INSERT INTO users SET ?", data, (err, result, fields) => {
//     if (err) {
//       throw err;
//     }
//     res.send(result);
//   });
con.query(data,(err,result)=>{
if(err) {
    res.send(err.message);
    throw err;
}
res.send(result);
console.log('row inserted');
})
});



app.listen(5000);

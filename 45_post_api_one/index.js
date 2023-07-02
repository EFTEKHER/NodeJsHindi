const express = require("express");
const con = require("./config");
const app = express();
app.use(express.json());
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


  const data = req.body;
  con.query("INSERT INTO users SET?", data, (err, result, fields) => {
    if (err) {
      throw err;
    }
    res.send(result);
    console.log(result);
  });

});



app.listen(5000);



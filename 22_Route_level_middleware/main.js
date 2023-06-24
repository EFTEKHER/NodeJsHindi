const express = require("express");
const app = express();
const reqFilter=require('./middleware');
const route= express.Router();
route.use(reqFilter);
app.get("/", (req, res) => {
  res.send("wlcome to home page");
});
app.get("/users",(req, res) => {
  res.send("wlcome to users page");
});
route.get("/about", (req, res) => {
  res.send("wlcome to about page");
});
route.get("/contact", (req, res) => {
    res.send("wlcome to contact page");
  });
app.use('/',route)
app.listen(4000);


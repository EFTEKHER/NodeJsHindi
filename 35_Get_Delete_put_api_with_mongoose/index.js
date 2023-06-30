const express = require("express");
require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());
app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  res.send(result);
  console.log(result);
});
app.get("/list", async (req, res) => {
  let data = await Product.find();
  res.send(data);
});

app.delete("/delete/:id", async (req, res) => {
  console.log(req.params.id);
  let data = await Product.deleteOne({ _id: req.params.id });
  console.log(data);
  res.send(data);
});
app.put("/update/:id", async (req, res) => {
  let data = await Product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    },
    { upsert: true }
  );
  res.send(data);
  console.log(data);
});

app.listen(5000);

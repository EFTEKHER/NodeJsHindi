module.exports= reqfilter = (req, res, next) => {
    console.log("request filter");
    if (!req.query.age) {
      res.send("please provide  age");
    } else if (req.query.age < 18) {
      res.send("you cannot access this page");
    } else {
      next();
    }
  };
const http = require("http");
const data =require('./data')
http
  .createServer((req, res) => {
    //response send
    //react send request
    //Heading first
    res.writeHead(200, { "Content-Type": "application/json" });

    //Body

    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(5000);

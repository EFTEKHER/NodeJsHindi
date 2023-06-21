//makes server request and response by http
const http = require('http');
//createserver take function as a parameter
// function dataControl(req,res){
    
//         res.write("<h1>Hello this is Efte </h1>");//client response
//         res.end();
        
// }
//http handles request, response
const dataControl=(req,res)=>{
    
    res.write("<h1>Hello this is Efte </h1>");//client response
    res.end();
    
}
http.createServer(dataControl).listen(4500);


//create read update delete

const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "crud");

const filePath = `${dirPath}/fruit.txt`;
//write
// fs.writeFileSync(filePath,'this is a simple text file');
//read
// fs.readFile(filePath, 'utf8',(err,item)=>{
//     console.log(item);
// } )
//update

// fs.appendFile(filePath, '   and file name is apple.txt ',(err)=>{
//     if(!err) console.log('file is updated successfully')
// })
//rename

// fs.rename(filePath, `${dirPath}/frui.txt`, (err) => {
//   if (!err) {
//     console.log("filename is updated successfully");
//   }
// });

//delete

fs.unlinkSync(`${dirPath}/frui.txt`);

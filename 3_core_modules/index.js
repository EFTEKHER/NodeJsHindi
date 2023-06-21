//core module global module

console.warn('code step by step ');


//non global modue which need to import

const fs= require('fs');

fs.writeFileSync('hello.txt',"code-step-by-step");

//directory name


console.log("-->>",__dirname);


//file name

console.log("-->>",__filename);
//non global module top level declare required

const as = require('fs').writeFileSync;
as("abc.txt","what are you doing?");

const app= require('./app');

console.log(app);
console.log(app.y);
console.log(app.z());

const arr=[2,4,7,1,3,8,3]

arr.filter((item)=>{
   console.log(item); 
})


let result= arr.filter((item)=>{
    return item ===3;

})
console.warn(result);
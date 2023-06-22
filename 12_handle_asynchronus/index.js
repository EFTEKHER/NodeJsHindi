
let a=10;
let b=0;


let waitingData= new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve(20)
    },2000);
})
waitingData.then((b)=>{
    console.log(a+b);
})
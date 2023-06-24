const dbConnect=require('./mongodb')

// dbConnect().then((res) => {
//   // console.warn(res.find().toArray());
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.warn(data);
//     });
// });
const main=async()=>{
    console.log('main function called');
    let data= await dbConnect();
    data=await data.find().toArray();
    console.warn(data);

}
main();
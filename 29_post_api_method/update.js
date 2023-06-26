const dbConnect=require('./mongodb');

const updateData=async()=>{
    let data=await dbConnect();
    let result= await data.updateMany({name:'note 9' },{$set:{name:'max pro 9',price:570}},{ upsert: true })
    // console.warn(result);
    console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );

}
updateData();
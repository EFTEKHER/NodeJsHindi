const dbConnect =require('./mongodb');

const deleteData=async()=>{
    let data=await dbConnect();
    let result=await data.deleteMany({name:'note 5'})
    if (result.deletedCount) {
        console.log("Successfully deleted one document.");
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
      }
}
deleteData();
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "e-comm";
const client = new MongoClient(url);

const dbConnect = require("./mongodb");

const insert = async () => {
  try {
    const db = await dbConnect();
    const docs = [
      {
        name: "note 5",
        brand: "vivo",
        price: 320,
        category: "mobile",
      },
      {
        name: "note 8",
        brand: "infinity",
        price: 320,
        category: "mobile",
      },
      {
        name: "note 9",
        brand: "realme",
        price: 300,
        category: "mobile",
      },
    ];
    const options = { ordered: true };
    const result = await db.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
    if (result.acknowledged) {
      console.log("data inserted successfully");
    } else {
      console.log("data not inserted successfully");
    }
  } finally {
    await client.close();
    
  }
};
insert().catch(console.dir);

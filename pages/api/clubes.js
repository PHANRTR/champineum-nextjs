const url = require('url');
const { MongoClient } = require('mongodb');

// Create cached connection variable
let cachedDb = null;

let clubes = null;

async function connectToDatabase(uri) {

  let ids = null;

  if (cachedDb) {
    return cachedDb;
  }

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  //const db = client.db("base_team");

  //const db = await client.db(url.parse(uri).pathname.substr(1));

  return client;
}

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  db.connect(err => {
    console.log("Connected to MongoDB server...");
    const ids = db.db(process.env.MONGODB_DB).collection(process.env.MONGO_DB_COLLECTION) // substitute your database and collection names
    ids.find({}).toArray(function(err, result) {
        if(!err) {
          console.log("find query executed...")    
          console.log(result)
          res.status(200).json({ result });
        } else {
          res.status(500).json({});
        }
    });
      
  });
};
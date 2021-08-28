const url = require('url');
const { MongoClient } = require('mongodb');

// Create cached connection variable
let cachedDb = null;

async function connectToDatabase(uri) {

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  return client;
}

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  db.connect(err => {
    console.log("Connected to MongoDB server...");
    const ids = db.db(process.env.MONGODB_DB).collection(process.env.MONGO_DB_COLLECTION)
    ids.find({}).toArray(function(err, result) {
        if(!err) {
          res.status(200).json({ result });
        } else {
          res.status(500).json({});
        }
    });
      
  });
};

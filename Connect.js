const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/mongodb";
const client = new MongoClient(uri, { useNewUrlParser: true });

const Connect = module.exports;

connect = async () => {
    await client.connect();
    return client.db('mongodb');
}

Connect.getDB = () => connect();

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient();
let db;
client.connect(err => {
    if(err) console.error('Error Connecting MongoDB');
    db = client.db('mongodb');
})
var http = require('http');

const mongodb = require('mongodb');
global.ObjectId = require('mongodb').ObjectId;

const mongoClient = mongodb.MongoClient;

global._db;
try {
    mongoClient.connect("mongodb://database/ginger", async (err, client) => {
        if (err) {
            throw err;
        }
        console.log("Database created!");

        _db = await client.db();

        await _db.createCollection("users");
        if (!_db.collection("users").countDocuments()) {
            await _db.collection("users").insertMany([{
                name: 'Ram',
                age: 27
            }, {
                name: 'Shyam',
                age: 22
            }])
        }

    })

} catch (e) {
    console.log("Error==>", e);
}

//create a server object:
var routes = require("./routes");
http.createServer(async (req, res) => {
    switch (req.url) {
        case '/':
        case '': {
            routes.index(req, res)
        }
    }
}).listen(3000); //the server object listens on port 8080
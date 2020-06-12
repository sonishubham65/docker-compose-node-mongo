module.exports = {
    index: async (req, res) => {
        console.log("hello..")
        let users = await _db.collection("users").find({}).toArray();
        res.write(`Users list: ${JSON.stringify(users)}\n`)
        res.write('Hello shubham'); //write a response to the client
        res.end(); //end the response
    }
}
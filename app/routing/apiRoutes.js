const fs = require("fs");
let friendData = require("../data/friends.json");

module.exports = function(app) {
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    app.post("/api/friends", (req, res) => {
        let newFriend = req.body;
        friendData.push(newFriend);
        // console.log(__dirname);
        res.json(newFriend);
        /*fs.writeFile("../data/friends.json", friendData, "utf8", (err) => {
            if(err) throw err;
            console.log("friends.json ammended");
        });*/
    });
}
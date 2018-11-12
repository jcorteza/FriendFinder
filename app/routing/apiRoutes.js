// const path = require("path");
let friendData = require("../data/friends.json");

module.exports = function(app) {
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    app.post("/api/friends", (req, res) => {
        let newFriend = req.body;
        friendData.push(newFriend);
        res.json(newFriend);
    });
}
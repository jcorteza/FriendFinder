// const path = require("path");
let friendData = require("../data/friends.json");

module.exports = function(app) {
    /*app.get("/api/friends", (req, res) => {
        console.log('bam')
        res.json(friendData);
    });*/
   app.route("/api/friends")
        .get((req, res) => {
            res.json(friendData);
        })
        .post((req, res) => {
            let newFriend = req.body;
            friendData.push(newFriend);
            res.json(newFriend);
        });
}
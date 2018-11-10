const path = require("path");
let friendData = require("../data/friends.json");

console.log(friendData);

module.exports = function(app) {
    app.get("/api/friends", (req, res) => {
        console.log('bam')
        res.json(friendData);
    });
   /* app.route("/api/friends")
        .get((req, res) => {
            // let friendMatches = app.use(express.json(friendData));
            res.json(friendData);
        })
        /*.post((req, res) => {
            let newFriend = app.use(express.urlencoded(req.body));
            friendData.push(newFriend);
        });*/
}
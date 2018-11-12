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
        let scoreDiff;
        let friendMatch;
        for(let friend in friendData){
            if(friend.name !== newFriend.name){
                let thisFriendScores = friendData.friend.scores;
                let thisDiff;
                for(i=0; i < thisFriendScores.length; i++){
                    thisDiff += Math.abs(parseInt(thisFriendScores[i]) - parseInt(newFriend.scores[i]));
                }
                if (!scoreDiff) {
                    scoreDiff = thisDiff;
                    friendMatch = friendData.friend;
                }
                else if(thisDiff < scoreDiff) {
                    scoreDiff = thisDiff;
                    friendMatch = friendData.friend;
                }
            }
        }
        console.log(friendMatch);
    });
}
const fs = require("fs");
let friendData = require("../data/friends.json");

module.exports = function(app) {
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    app.get("/api/friends/:name", (req, res) => {
        let friendMatch = req.params.name;
        friendData.find((friend) => { 
            if(friend.name === friendMatch) res.send(friend);
        });
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
        for(let friend in friendData){
            if(friend.name !== newFriend.name){
                let thisFriendScores = friendData.friend.scores;
                let thisDiff;
                for(i=0; i < thisFriendScores.length; i++){
                    thisDiff += Math.abs(parseInt(thisFriendScores[i]) - parseInt(newFriend.scores[i]));
                }
                (!scoreDiff)? scoreDiff = thisDiff :
                (thisDiff < scoreDiff)? scoreDiff = thisDiff : scoreDiff = scoreDiff;
                console.log(`ScoreDiffs = ${scoreDiffs}`);
            }
        }
    });
}
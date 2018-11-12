$(document).ready(() => {
    $('#survey').scrollspy({ target: '#survey-nav' });

    $("#makeFriend").on("click", (event) => {
        event.preventDefault();

        let surveyScores = [];
        surveyScores.push($("input[name = 'social']:checked").val());
        surveyScores.push($("input[name = 'followers']:checked").val());
        surveyScores.push($("input[name = 'arts']:checked").val());
        surveyScores.push($("input[name = 'travel']:checked").val());
        surveyScores.push($("input[name = 'career']:checked").val());
        surveyScores.push($("input[name = 'family']:checked").val());
        surveyScores.push($("input[name = 'current']:checked").val());
        surveyScores.push($("input[name = 'tv']:checked").val());
        surveyScores.push($("input[name = 'active']:checked").val());
        surveyScores.push($("input[name = 'nightlife']:checked").val());

        let newFriend = {
            name: $("#name").val().trim(),
            photo: $("#imageUrl").val().trim(),
            scores: surveyScores
        }

        $.post("/api/friends", newFriend, (data) => {
            $.get("/api/friends", (friendData) => {
                let scoreDiff;
                let friendMatch;
                for(let friend in friendData){
                    if(friendData[friend].name !== newFriend.name){
                        let thisFriendScores = friendData[friend].scores;
                        let thisDiff = 0;
                        for(i=0; i < thisFriendScores.length; i++){
                            thisDiff += Math.abs(parseInt(thisFriendScores[i]) - parseInt(newFriend.scores[i]));
                        }
                        if (!scoreDiff) {
                            scoreDiff = thisDiff;
                            friendMatch = friendData[friend];
                        }
                        else if(thisDiff < scoreDiff) {
                            scoreDiff = thisDiff;
                            friendMatch = friendData[friend];
                        }
                    }
                }
                $("#friendName").text(friendMatch.name);
                $("#friendPic").attr("src", friendMatch.photo);
            })
        });
    });

});
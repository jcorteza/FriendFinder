$(document).ready(() => {
    $('#survey').scrollspy({ target: '#survey-nav' });

    $("#makeFriend").on("click", () => {

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

        $.post("/api/friends", newFriend);
    });

});
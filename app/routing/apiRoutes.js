const path = require("path");

module.exports = function(app) {
    app.get("/api/friends", (req, res) => {
        res.json({"test": "test1"});
    });
    /*app.route("/api/friends")
        /*.all() for body parser?*/
        /*.get((req, res) => {
            res.json({"test": "test1"});
        })
        .post((req, res) => {
            path("../data/friends.json").push(req);
        });*/
}
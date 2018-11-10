module.exports = function(app){
    app.get("/*", (req, res) => {
        path = req.url;
        switch(path){
            case "/survey":
                res.send("Survey Page");
                break;
            default:
                res.send("Index page");
                break;
        }
    });
}

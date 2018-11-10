const path = require("path");

module.exports = function(app){
    app.get("/*", (req, res) => {
        let filePath = req.url;
        const options = {root: `${__dirname}/../public/`};
        switch(filePath){
            case "/survey":
                res.sendFile("survey.html", options);
                break;
            case "/":
                res.sendFile("index.html", options);
                break;
            default:
                res.send("404");
                break;
        }
    });
}

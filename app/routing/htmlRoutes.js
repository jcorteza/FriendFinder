module.exports = function(express, app){
    const options = {root: `${__dirname}/../public/`};

    app.get("/survey", (req, res) => {
        res.sendFile("survey.html", options);
    }).use(express.static(`${__dirname}/../public/`));

    app.get("/", (req, res) => {
        res.sendFile("index.html", options);
    });
}

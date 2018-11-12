const express = require("express");
const app = express();
const PORT = process.env.PORT | 3020;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(express, app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
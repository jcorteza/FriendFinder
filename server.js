const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT | 3020;

require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
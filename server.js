const express = require("express");
const app = express();
const PORT = process.env.PORT | 3020;

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(express, app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
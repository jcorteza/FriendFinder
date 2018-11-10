const express = require("express");
const app = express();
const PORT = process.env.PORT | 3020;

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
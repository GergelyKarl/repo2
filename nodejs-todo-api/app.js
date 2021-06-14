require("./db/connect");
const express = require("express");
const app = express();
const routes = require("./routes/routes");

//middleware
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/todos", routes);

const port = 3000;

app.listen(port, console.log(`server started on port ${port}`));

const express = require("express");
const app = express();
const port = 3000;
var morgan = require("morgan");

app.use(express.urlencoded());

app.use(express.static("public"));
app.use("/images", express.static("images"));

app.use(express.json());
app.set("view engine", "ejs");

app.use(
  morgan(
    ":date[iso] :method :url :status :res[content-length] - :response-time ms"
  )
);

const IndexRouter = require("./routes/index");
app.use("/", IndexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

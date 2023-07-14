const express = require("express");
const logger = require("morgan");
// const favicon = require('serve-favicon')

const app = express();


// MIDDLEWARE
app.use(logger("tiny"));
app.use(express.static("public"));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


// ROUTES

// Example - Query Strings (?)
app.get('/search', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});



// Example - Route Parameters (:)
app.get("/accounts/:username", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});


app.get("/users/:username/books/:bookId", (req, res, next) => {
  console.log("req.params -> ", req.params);

  res.send(req.params);
});

app.get("/results", (req, res, next) => {
  console.log("req.query -> ", req.query);

  res.send(req.query);
});

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, () => console.log("App listening on port 3000!"));
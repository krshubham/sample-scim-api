var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const scimRouter = require('./routes/scim');

var app = express();

app.use(logger(':date, :remote-addr, :url, :status, :response-time ms'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log(req.body);
  if (req.headers.authorization == null) {
    res.status(401).send("Not allowed without basic auth").end();
  } else {
    const val = req.headers.authorization.split(" ");
    const encodedCredentials = val[1];
    const [username, password] = Buffer.from(encodedCredentials, "base64").toString().split(':')
    if (username !== password) {
      res.status(401).end("Wrong auth");
    }
  }
  next();
})

app.use('/scim/v2', scimRouter);

module.exports = app;

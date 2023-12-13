const secret = require('./config/secret');
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();


const corsOptions = {
  origin: secret.connectionOption.origin,
  credentials: true,
};

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.static('src'));
app.use(bodyParser.json());

require('./components/user/userRoute')(app);
require('./components/notice/noticeRoute')(app);
require('./components/problem/problemRoute')(app);

module.exports = app;

const dotenv = require('dotenv');
const express = require("express");
const bodyparser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');
const errorHandler = require("./middleware/error");
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use(cookieParser());

app.use(fileUpload({
  useTempFiles: true
}));

app.use('/', express.static('uploads'));
app.use(bodyparser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send("Api running");
});

// Connecting Routes

app.use('/', require('./routes/indexpost'));
app.use('/user', require('./routes/userRouter'));
app.use('/api', require('./routes/upload'));



// Error Handler Middleware
app.use(errorHandler);

// load config
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);





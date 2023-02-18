const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { sendEmailToMe, sendEmailToUser } = require("./account");
// const postsRoutes = require('./routes/posts')
// const userRoutes = require('./routes/user')

// const mongoose = require('mongoose')
const app = express();

// mongoose.connect('mongodb+srv://Karan:' + process.env.MONGO_ATLAS_PW + '@cluster0.5tn0w.mongodb.net/node-angular?retryWrites=true&w=majority')
//   .then(() => {
//     console.log("Connected to Database!")
//   }).catch(() => {
//     console.log("Connection failed!")
//   })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/", express.static(path.join(__dirname, "angular")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// app.get('/users', (req, res, next) => {
//     const users = [
//         {key : "1", name: "Karan"},
//         {key : "2", name: "Raj"},
//     ]
//     // res.status(200).json({
//     //     message : 'Users fetched Successfully',
//     //     user : users
//     // })
//     res.status(200).send(users)
// })

app.post("/sendEmail", (req, res, next) => {
  try {
    sendEmailToMe(req.body.name, req.body.email, req.body.message);
    sendEmailToUser(req.body.name, req.body.email);
    res.status(200).json({
      message: "Message recieved",
      email: req.body.email,
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

// app.use("/api/posts", postsRoutes)
// app.use("/api/user", userRoutes)
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});

module.exports = app;

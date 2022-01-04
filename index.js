const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

const User = require('./models/User');

// connect to db
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log('CONNECTED TO DB');
});

// middleware
app.use(express.json());

// route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('SERVER RUNNING. NICE.'));

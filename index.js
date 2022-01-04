const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// connect to db
mongoose.connect(process.env.MONGO_URL, () => {
  console.log('CONNECTED TO DB');
});

// import routes
const authRoute = require('./routes/auth');

// route middleware
app.use('/api/user', authRoute);

app.listen(3000, () => {
  console.log('SERVER RUNNING. NICE.');
});

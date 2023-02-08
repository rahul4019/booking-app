const express = require('express');
const connectWithDb = require('./config/db')
require('dotenv').config();

const app = express();

// connect with database
connectWithDb();

app.listen(process.env.PORT || 4000, (err) => {
  if (err) {
    console.log(`Error in server connection: `, err);
  }
  console.log(`Server is up and running at port no. ${process.env.PORT}`);
});

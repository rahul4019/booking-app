const express = require('express');
const connectWithDb = require('./config/db');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect with database
connectWithDb();

// use express router
app.use('/', require('./routes'));

app.listen(process.env.PORT || 4000, (err) => {
  if (err) {
    console.log(`Error in server connection: `, err);
  }
  console.log(`Server is up and running at port no. ${process.env.PORT}`);
});

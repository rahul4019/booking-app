const express = require('express');
require('dotenv').config();
const app = express();

app.listen(process.env.PORT || 4000, (err) => {
  if (err) {
    console.log(`Error in server connection: `, err);
  }
  console.log(`Server is up and running at port no. ${process.env.PORT}`);
});

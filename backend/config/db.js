const mongoose = require('mongoose');

const connectWithDb = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB CONNECTED SUCCESSFULLY`))
    .catch((err) => {
      console.log(`DB connection failed: ${err}`);
      process.exit(1);
    });
};

module.exports = connectWithDb;
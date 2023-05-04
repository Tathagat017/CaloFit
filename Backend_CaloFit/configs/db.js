const mongoose = require('mongoose'); 

mongoose.set('strictQuery', true);  //Invalid queries due to misspelled / undefined schema properties will throw an error

require('dotenv').config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.mongoURL);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.log('MongoDB connection failed', err);
  }
};

module.exports = connection;

const mongoose = require('mongoose');
const dbURI = 'mongodb://0.0.0.0:27017/Food-Delivery';
mongoose.connect(dbURI)
  .then(() => console.log('Connected!'));


    




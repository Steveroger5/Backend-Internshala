
const mongoose = require('mongoose')
const config = require('config');
const db = config.get('mongoUrl');


const connectDB = () => {
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err))
}
module.exports = connectDB

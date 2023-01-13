require('dotenv').config();
const mongoose = require('mongoose');

exports.connecter = async () => {
    try {
        mongoose.connection.on('open', () => console.log('DB connected'));
        mongoose.set("strictQuery", false);
        return mongoose.connect(process.env.MONGO_STRING);
    } catch (error) {
        console.log('Error connecting to database');
        return process.exit(1);
    }
};

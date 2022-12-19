const mongoose = require('mongoose');
const { DB_QUERY_STRING } = require('./env');


exports.connecter = async () => {
    try {
        console.log(DB_QUERY_STRING);
        mongoose.set("strictQuery", false);
        mongoose.connection.on('open', () => console.log('DB connected'));
        return mongoose.connect(DB_QUERY_STRING);
    } catch (error) {
        console.log('Error connecting to database');
        return process.exit(1);
    }
};

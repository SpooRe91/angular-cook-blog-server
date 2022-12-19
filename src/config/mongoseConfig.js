const mongoose = require('mongoose');
require('dotenv').config();

exports.connecter = async () => {
    try {
        mongoose.connection.on('open', () => console.log('DB connected'));
        mongoose.set("strictQuery", false);
        return mongoose.connect("mongodb+srv://SpooRe91:yUXNuwLoeOGSApso@cook-blog.qcll9bj.mongodb.net/test");
    } catch (error) {
        console.log('Error connecting to database');
        return process.exit(1);
    }
};

const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const nutrientShema = new mongoose.Schema({}, { strict: false });
const Nutrient = mongoose.model('Nutrient', nutrientShema);

exports.Nutrient = Nutrient;
// models/listModel.js
const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name: String,
    list: String,
    status: String
});






module.exports = mongoose.model('List', listSchema);

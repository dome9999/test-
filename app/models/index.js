const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose);
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;

db.url = dbConfig.url;
db.users = require("./user.model.js")(mongoose,autoIncrement);

module.exports = db;
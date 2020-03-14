const mongoose = require('mongoose');

StatsSchema = new mongoose.Schema({
    city: {type: String},
    start_date: {type: Date},
    "end_date": {type: Date},
    "price": {type: Number},
    "status": {type: String},
    "color": {type: String}
})

exports.Stats = new mongoose.model('Stats', StatsSchema);

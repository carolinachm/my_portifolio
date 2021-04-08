const mongoose = require('mongoose')

const { Schema } = mongoose;

const portifolioSchema = new Schema({
    title: {
        type:String,
        require: true
    },
    description: {
        type:String,
        require: true
    },
    createAt: {
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('portifolio', portifolioSchema)
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL_CONECT, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connect Mongodb');
})
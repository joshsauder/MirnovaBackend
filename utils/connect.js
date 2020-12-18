const mongoose = require('mongoose')
require("dotenv").config();

exports.connectToDB = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONDOBDB_USER}:${process.env.MONGODB_KEY}@cluster0-ipdrb.mongodb.net/Mirnova?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true,});
    mongoose.connection.on('error', function(err) {
        throw Error('Error connecting')
    });
    mongoose.set('useFindAndModify', false);
    return true;
}
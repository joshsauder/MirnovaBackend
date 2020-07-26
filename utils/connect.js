const mongoose = require('mongoose')
require("dotenv").config();

export const connectToDB = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONDOBDB_USER}:${process.env.MONGODB_KEY}@cluster0-ipdrb.mongodb.net/Mirnova?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true,});
    mongoose.connection.on('error', function(err) {
        console.log('Mongoose default connection error: ' + err);
    });
    mongoose.set('useFindAndModify', false);
    return true;
}
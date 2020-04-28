const mongoose = require('mongoose')

export const connectToDB = async () => {
    const mongoClient = await mongoose.connect("mongodb://127.0.0.1:27017/test",
        { useNewUrlParser: true, useUnifiedTopology: true,});
    mongoose.connection.on('error', function(err) {
        console.log('Mongoose default connection error: ' + err);
    });
    return true;
}
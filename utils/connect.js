import mongoose from 'mongoose'

export const connectToDB = async () => {
    const mongoClient = await mongoose.connect("");
    mongoose.connection.on('error', function(err) {
        console.log('Mongoose default connection error: ' + err);
    });
    return true;
}
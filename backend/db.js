const mongoose = require('mongoose');
require('dotenv').config()

const connection = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        await mongoose.connect(process.env.MONGO_URI,connectionParams);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Not Connected to Databse",error);
    }
}
module.exports = connection;
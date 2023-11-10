const mongoose = require("mongoose");
//const connect_str = 'mongodb+srv://admin:admin@gideonscluster.zivtzvm.mongodb.net/ejs-contact-db?retryWrites=true&w=majority';
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected", connect.connection.host, connect.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;
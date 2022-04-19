const mongoose = require('mongoose');


const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb://localhost:27017/TicketsDB', {
            useUnifiedTopology:true,
            useNewUrlParser:true
        })

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    }catch(error){
        console.error(`Error : ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

module.exports = connectDB;

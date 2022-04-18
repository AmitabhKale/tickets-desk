const express = require('express');
const userRoutes = require('./routes/userRoutes');
const colors = require('colors');
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()

const app = express();

//connectDB
connectDB()

// body-parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get('/', (req,res) => {
    res.send('Hello... Welcome to Tickets System Desk ..')
})

app.use('/api/users', userRoutes);

app.use(errorHandler)

app.listen(5000 , () => {
    console.log('Server is started on port 5000');
})
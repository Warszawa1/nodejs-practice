const express = require('express');
const mongoose = require('mongoose');
require ('dotenv').config();
const productRoutes = require('./routes/product');


const app = express();
const port = process.env.PORT || 9000;

//middleware
//get the json data
app.use(express.json());
app.use('/api' , productRoutes);


app.listen(port, () => console.log('Server started on port', port ));

//routes
app.get('/', (req, res) => {
    res.send('Hello World');
});



//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
        //If everything works fine, we will get a connection object
        .then(() => console.log('Connected to MongoDB Atlas'))
        //If something goes wrong, we will get an error object
        .catch(error => console.error('Error connecting to MongoDB Atlas', error));


module.exports = app;
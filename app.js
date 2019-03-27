const express = require('express');
const app = express();
const postRoutes = require('./routes/post');
const bodyParser = require('body-parser');
const expressValidator =  require('express-validator');

const mongoose = require('mongoose');
// Load env variables.
const dotenv = require('dotenv');
dotenv.config();

//db connection 
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
).then(() => console.log('DB Connected'));


mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
})

// Middleware
const morgan = require('morgan');
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(expressValidator);
   
app.use('/', postRoutes);

const port = 8080;
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
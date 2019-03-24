const express = require('express');
const app = express();
const postRoutes = require('./routes/post');

// Middleware
const morgan = require('morgan');
app.use(morgan('dev'));
   
app.use('/', postRoutes);

const port = 8080;
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
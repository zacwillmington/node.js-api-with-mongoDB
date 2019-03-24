const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send("text test"); 
})

const port = 8080;
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
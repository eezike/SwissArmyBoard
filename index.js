const express = require('express');
const path = require('path');

const app = express();

//middleware
app.use(express.static("public"));
app.use('/icons', express.static("icons"));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/draw.html'));
});

app.listen(8080);
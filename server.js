const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

app.use(express.static(__dirname + '/dist'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use(morgan('dev'));

app.listen(process.env.PORT || 4001, () => {
    console.log('Server started!');
});

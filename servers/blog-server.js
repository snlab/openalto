var server = require('./server');
var app = server.create();

app.get('/', function(req, res) {
    res.send("Welcome to our blog!");
});

module.exports = app;

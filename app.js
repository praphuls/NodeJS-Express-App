/* 
// Creating a node server - without express

var http = require('http');
var port = 4500;

var server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Hello Node!!");

});

server.listen(port);
console.log('Server is running......'); 
*/

var express = require('express');
var app = express();

var port = 4000;
var authorRouter = express.Router();

var nav = [{
        list: '/books',
        text: 'Books'
    },
    {
        list: '/authors',
        text: 'Authors'
    }
]
var bookRouter = require('./src/routes/bookRoutes')(nav);
var authorRouter = require('./src/routes/authorRoutes')(nav);
var homeRouter = require('./src/routes/homeRoutes')(nav);

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', homeRouter);

// Creating server in Express
app.listen(port, function(err) {
    console.log("Sever from Express...");
})
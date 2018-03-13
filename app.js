var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/about', function(req, res){
    console.log(req.query);
    res.render('about', {qs: req.query});
});

app.get('/', function(req, res){
    console.log(req.url);
    res.render('index');
    //res.send('This is the homePage appleas'); //sendFile(path) for file;
});

app.get('/profile/:name', function (req, res) {
    var data = {age: 24, job: 'Ninja', hobbies: ['eating', "fighting", 'coding']};
    res.render('profile', {
        person: req.params.name,
        data: data
    });
});

app.post('/about', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('about-success', {data: req.body});
});

app.listen(3000);
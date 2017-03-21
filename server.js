const express = require('express');
const react = require('react');
const reactDOM = require('react-dom');
const cons = require('consolidate');
const dust = require('dustjs-linkedin');
const bodyParser = require('body-parser');



const PORT = 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', PORT);

app.use(express.static(__dirname + '/public'));

//view engine as dust
app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');



app.get('/',function(req,res){
    res.render('index');
});

app.listen(PORT);
console.log(`Server running on http://localhost:${PORT}`);

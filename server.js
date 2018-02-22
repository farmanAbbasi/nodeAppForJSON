var fs = require('fs');
var bodyParser = require('body-parser');//for final steps of post method note : first npm install body parser

var data = fs.readFileSync('words.json');
//var afinnData=fs.readFileSync('afinn11.json');////////using afinn
var words = JSON.parse(data);
//var afinn=JSON.parse(afinnData);
console.log(words);
//console.log(afinn);/////////using afinn
console.log("server is starting");
var express = require("express");
var app = express();
var server = app.listen(3000, listening);
function listening() {
    console.log("listening");
}
app.use(express.static("p5ForNodeApp"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/search', sendAll);//:/flower means kuch bhi

function sendAll(request, response) {
    var data = {//afinn
        additional: words,
        // afinn:afinn
    }
    response.send(data);

}
app.get('/add/:name/:value?', addMethod);//? is used to make it optional

function addMethod(request, response) {
   
    var data = request.params;
    var naam = data.name;
    var keemat = Number(data.value);
    words[naam] = keemat;//
    naam: keemat
    var data = JSON.stringify(words, null, 2);//adding to json and null n 2 are to format the json
    fs.writeFile('words.json', data, finished);//adding to json
    function finished(err)//adding to json
    {
        console.log("all set ..");
    }
    var reply = {
        msg: "great job man"
    }
    response.send(reply);
    
    
}



//////for post

app.post('/analyze', analyzeThis);
function analyzeThis(request, response) {
    console.log(request.body);//request.body is used after installing, importing body parser
   // response.end("thank you!!!");
}



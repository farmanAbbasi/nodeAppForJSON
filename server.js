var fs=require('fs');

var data = fs.readFileSync('words.json');
var words=JSON.parse(data);
console.log(words);

console.log("server is starting");
var express = require("express");
var app = express();
var server = app.listen(3000, listening);
function listening() {
    console.log("listening");
}
app.use(express.static("website"));

app.get('/search', sendflower);//:/flower means kuch bhi

function sendflower(request, response) {
    //var data = request.params;
    //response.send("i love " + data.flowe + " too");
    response.send(words);

}
app.get('/add/:name/:value?',addMethod);//? is used to make it optional

function addMethod(request,response)
{
    var data=request.params;
    var naam=data.name;
    var keemat=Number(data.value);
    words[naam]=keemat;//
    naam:keemat
    var data=JSON.stringify(words,null,2);//adding to json and null n 2 are to format the json
    fs.writeFile('words.json',data,finished);//adding to json
    function finished(err)//adding to json
    {
        console.log("all set ..");
    }

    var reply={
        msg:"great job"
    }
    response.send(reply);
} 



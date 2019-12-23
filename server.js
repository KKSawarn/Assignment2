const express = require('express');

const bodyParser = require('body-parser');
const app = express();

const port = 8080;

var fs = require('fs');
//bootup time load data
var jsonContent = fs.readFileSync('./data.json', 'utf8');
var jsonDataPut = null;
app.get('/', (req, res) => {
    // json file data fatching
    var jsonDataPut = "pCloudy.com"
    var jsonDataGet = jsonContent;
    console.log(jsonDataGet);
    res.send(jsonDataGet);
})
app.put('/', (req, res) => {
    jsonDataPut = fs.readFileSync('./data.json', 'utf8');
    jsonContent = jsonDataPut;
    console.log(jsonDataPut);
    res.send(jsonDataPut);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

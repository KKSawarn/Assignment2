const express = require('express');
const app = express();
const port = 8080;
var fs = require('fs');
var jsonContent = fs.readFileSync('./data.json', 'utf-8');
app.get('/', (req, res) => {
    console.log(jsonContent);
    res.send(jsonContent);
})
app.put('/', (req, res) => {
    jsonDataPut = fs.readFileSync('./data.json','utf-8');
    jsonContent = jsonDataPut;
    console.log(jsonDataPut);
    res.send(jsonDataPut);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

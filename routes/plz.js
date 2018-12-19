var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');

var plzPath = path.join(__dirname, '../plz.txt');
//var jsonString = fs.readFileSync(plzPath, 'utf8');
var plzMap = new Map();

console.log("Processing PLZ file");
var count=0; 

fs.readFile(plzPath, 'utf-8', (err, file) => {
  const lines = file.split('\r\n')
  lines.forEach(function(line) {
    //console.log(line);
    var fragments=line.split(';');
    //console.log(fragments[0]);
    //console.log(fragments[1]);
    plzMap.set(fragments[0],fragments[1]);  
    count++;
  });        
});
console.log("Ready to process PLZ requests");

router.get('/*', function(req, res, next) {  
  var input_plz=req.url.substr(1);//remove trailing slash
  //console.log(input_plz);
  var picked=plzMap.get(input_plz);
  //console.log(picked);
  if (picked != null)
  {
    picked=picked.replace(/,/g, '","');//convert comma separated numbers to json-style array
    res.send('{"plz":["'+picked+'"]}');
}
else
{
  res.status(400).send('{"city":"not found"}');
}   
});

module.exports = router;

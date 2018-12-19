var express = require('express');
var router = express.Router();
var os = require('os');

var fs = require('fs');
var path = require('path');

var cityPath = path.join(__dirname, '../cities.txt');
//var jsonString = fs.readFileSync(plzPath, 'utf8');
var cityMap = new Map();

console.log("Processing cities file");
var count=0; 

fs.readFile(cityPath, 'utf-8', (err, file) => {
  const lines = file.split(os.EOL);
  lines.forEach(function(line) {
    //console.log(line);
    var fragments=line.split(';');
    //console.log(fragments[0]);
    //console.log(fragments[1]);
    cityMap.set(fragments[0].toLocaleLowerCase(),fragments[1]);  
    count++;
  });        
});
console.log("Ready to process city requests");

router.get('/*', function(req, res, next) {  
  var input_city=decodeURI(req.url.substr(1).toLowerCase());//remove trailing slash, decode german Umlaute and ignore case
  var picked=cityMap.get(input_city);
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

var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var plzPath = path.join(__dirname, '../plz.txt');
var cityPath = path.join(__dirname, '../cities.txt');

router.get('/', function(req, res/*, next*/) {
  var fsizeplz=0;
  var fsizecity=0;
  try{  
   fsizeplz = fs.statSync(plzPath).size;
   fsizecity = fs.statSync(cityPath).size;
  }
  catch (err){
  //ignore size will be 0
  }
  if (fsizeplz>0 & fsizecity>0)
  {
   res.send('{"outcome":"UP","checks":[{"name":"plz-city-files","state":"UP"}]}');
  }
  else  
  {
    res.send('{"outcome":"DOWN","checks":[{"name":"plz-city-files","state":"DOWN"}]},');
  }
});

module.exports = router;


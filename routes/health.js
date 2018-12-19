var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var plzPath = path.join(__dirname, '../plz.txt');
/* GET home page. */
router.get('/', function(req, res/*, next*/) {
  const fsize = fs.statSync(plzPath).size;
  if (fsize>0)
  {
   res.send('{"outcome":"UP","checks":[{"name":"PLZ-File","state":"UP"}]}');
  }
  else  
  {
    res.send('{"outcome":"DOWN","checks":[{"name":"PLZ-File","state":"DOWN"}]}');
  }
});

module.exports = router;

var express = require('express');
var router = express.Router();

var r1 = Math.random()*100;
var r2 = Math.random()*100;
var num1=0;
var num2=0;
var num3=0;


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  num1=Math.hypot(r1,r2);
  num2=Math.ceil(r1);
  num3=Math.clz32(r1);
  
  
  
  res.send(`The Random numbers are ${r1} and ${r2} <br> <br> hypot applied to ${r1},${r2} is ${num1}  <br> <br> ceil applied to ${r1} is ${num2}  <br> <br>  clz32 applied to ${r1} is ${num3}`);


});

module.exports = router;
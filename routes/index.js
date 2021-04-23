var express = require('express');
var router = express.Router();

var request = require('sync-request');

/* GET home page. */
router.get('/', function(req, res, next) {
  var alert
  res.render('index', { title: 'Express', alert });
});

router.post('/message', async function(req, res, next) {

  console.log(req.body)

  var requete = await request("GET", `https://gender-api.com/get?name=${req.body.firstname}&key=vBTpFWaMYVlnUXCZWw`);
  var resultWS = JSON.parse(requete.body);
  console.log(resultWS)

  var alert

  if (resultWS.gender == 'male' ) {
    var alert = "Rosebud" 
  } else if (resultWS.gender == 'female'){
    var alert = "We rob banks"
  } else {
    var alert = "It’s a trap !"
  }

  console.log(alert)

  res.render('index', {alert : alert});
});

module.exports = router;

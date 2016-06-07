var Chance = require('chance');
var chance = new Chance();
var express = require('express');
var app = express();


app.get('/', function(req, res) {
  res.send(generateAdresses());
});

app.listen(3000, function () {
  console.log('Accepting HTTP requests on port 3000');
});

function generateAdresses(){
  var numberOfAdresses = chance.integer({
    min: 0,
	max: 10
  });
  console.log(numberOfAdresses);
  var adresses = [];
  for(var i = 0; i < numberOfAdresses; i++) {
    var country = chance.country();
	adresses.push({
	  phone: chance.phone({
	    country: country
	  }),
	  email: chance.email(),
	  address:chance.address(),
	  zip: chance.zip(),
	  city: chance.zip(),
	  country: country
    });
  };
  console.log(adresses);
  return adresses;
}

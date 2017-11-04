var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

function ensureAuthenticated(req, res, next){
	if (req.isAuthenticated()) {
		return next();
	} else {
		//req.flash('error_msg', 'You are not logged in');
		res.redirect('/users/login')
	}
}

router.post('/temp', function(req, res){

	var button = req.body.button;

	if(button == "ON") {
		var request = require('request');
		request('http://192.168.0.50/on', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body) // Print the web page.
		    }
		});
  		console.log("CLICK");
  		console.log('O aparelho de ar está ligado');
 	} 

 	else {
 		var request = require('request');
		request('http://192.168.0.50/off', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body) // Print the web page.
		    }
		});
  		console.log("CLICK");
  		console.log('O aparelho de ar está desligado');
 	} 
 	res.redirect('/');

});

router.post('/', function(req, res){

	var temp = req.body.temp;


	if (temp == 18) {
		var request = require('request');
		request('http://192.168.0.50/18', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body) // Print the web page.
		    }
		});
		console.log(temp);

	}
	else if (temp == 19) {
		var request = require('request');
		request('http://192.168.0.50/19', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body) // Print the web page.
		    }
		});
		console.log(temp);
	}
	else if (temp == 20) {
		var request = require('request');
		request('http://192.168.0.50/20', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body) // Print the web page.
		    }
		});
		console.log(temp);
	}
	else if (temp == 21) {
		var request = require('request');
		request('http://192.168.0.50/21', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body) // Print the web page.
		    }
		});
		console.log(temp);		
	}
	else if (temp == 22) {
		var request = require('request');
		request('http://192.168.0.50/22', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body) // Print the web page.
		    }
		});
		console.log(temp);		
	}
	else if (temp == 23) {
		var request = require('request');
		request('http://192.168.0.50/23', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body) // Print the web page.
		    }
		});
		console.log(temp);		
	}
	else if (temp == 24) {
		var request = require('request');
		request('http://192.168.0.50/24', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body) // Print the web page.
		    }
		});
		console.log(temp);		
	}
	else if (temp == 25) {
		var request = require('request');
		request('http://192.168.0.50/25', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body) // Print the web page.
		    }
		});
		console.log(temp);		
	}
	else if (temp == 26) {
		var request = require('request');
		request('http://192.168.0.50/26', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body) // Print the web page.
		    }
		});
		console.log(temp);	}
	else if (temp == 27) {
		var request = require('request');
		request('http://192.168.0.50/27', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body) // Print the  web page.
		    }
		});
		console.log(temp);		
	}
	else if (temp == 28) {
		var request = require('request');
		request('http://192.168.0.50/28', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body) // Print the web page.
		    }
		});
		console.log(temp);
	}
	res.redirect('/');
});

module.exports = router;
'use strict';

const  express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	fs = require('fs');

app.get('/', function (req, res) {
  res.send('Hello, World!')
});

fs.writeFile('./src/public/markers.json', '{"marker": ' +
	'{"id": "1", "latlng": "50.44943,30.53", "description": "Description"}}', function (err) {
  if (err) return console.log(err);
  console.log('Markers > markers.json');
});

app.listen(port, function () {
  console.log('Listening on port ', port)
});
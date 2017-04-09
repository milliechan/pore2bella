const express = require('express');
const app = express();
const Vision = require('@google-cloud/vision');
const vision = Vision();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on 3000');
})

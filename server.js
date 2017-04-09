const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on 3000');
})

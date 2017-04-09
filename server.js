const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
  try{
    const html = (__dirname + '/index.html')
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on 3000');
})

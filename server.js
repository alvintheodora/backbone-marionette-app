var express = require('express');

var app = express();

var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  });

app.listen(port, ()=>console.log('server on ' + port));
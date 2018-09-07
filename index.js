const express = require('express'),
  path = require('path'),
  app = express();

//set the port
app.set('port', 3000);

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ws', ((req, res) =>  res.send('Server on!')));

app.get('/', ((req, res) =>  {
  res.sendFile(path.join(__dirname, 'index.html'));
}));


// Listen for requests
const server = app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'));
});
const express = require('express'),
  path = require('path'),
  app = express();
const PORT = process.env.PORT || 5000


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
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
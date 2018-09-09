module.exports = function(app, db) {
  app.get('/visual', (req, res)=> {
    db.collection('visualizations').find().toArray((err, result) => {
      if(err){
        res.send({'error': err});
      } else {
        res.send(result);
      }
    });
  });
  app.post('/visual', (req, res) => {
    const payment = req.body;
    db.collection('visualizations').insert(payment, (err,result) => {
      if(err) {
        res.send({'error': err});
      } else {
        res.send(result.ops[0]);
      }
    });
  });
}
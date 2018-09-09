const https = require('https');
const path = require('path');
const request = () => {
  const req = https.request(options , (res) =>{
    console.log(`statusCode: ${res.statusCode}`);
    console.log(`headers: ${res.headers}`);
    res.on('data', (d) => {
      process.stdout.write(d);
    })
  });
  return req;
}

const createVisualization = () => {
  const { PORT, HOSTNAME } = process.env.PORT
  const options = {
    hostname: HOSTNAME,
    port: PORT,
    path: '/visualization',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  }
  const req = request();
  req.on('error', (e) => {
    console.log(e);
  })
  
};

function generateVisualizarion(database, req) {
  database.collection('visualizations').find({ ip: req.ip }).toArray((err, result) => {
    if (err) { console.log(err) }
    else {
      let visualization = {
        ip: req.ip,
        quantity: 1,
        dataModificacao: new Date(),
        dataCriacao: new Date()
      };
      if(result.length > 0) {
        visualization.dataCriacao = result[0].dataCriacao;
        visualization._id = result[0]._id;
        visualization.quantity += result[0].quantity;
      }
      database.collection('visualizations').updateOne(
        { ip: req.ip },
        { $set: visualization },
        {upsert: true},
        (err, result)=> {
        if(err) { console.log(err)}
        else {}
      });
    }
  });
}

function getVisualizations (database, res) {
  database.collection('visualizations').find({}).toArray((err, result) => {
    if(err) { res.send({'error': err});}
    else {
      res.send(result);
    }
  });
}

module.exports = function(app, db){
  app.get('/visualization', (req, res) => {
    generateVisualizarion(db, req);
    res.send('Data was taken');
  });
  app.get('/visualizations', (req, res) => {
    getVisualizations(db, res);
  });


  // paymentRoutes(app,db);
}
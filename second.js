import express from 'express';

const server = express();
const server2 = express();
server.use(express.json());
server2.use(express.json());

let results = [32, 45, 67, 78, 84];

server.get('/', (req, res) => {
  res.send([4, 5, 6]);
});

server2.get('/', (req, res) => {
  res.send([6, 7, 8]);
});

server.get('/add/:n1/:n2', (req, res) => {
  console.log(req);
  res.send({
    result: parseInt(req.params.n1) + parseInt(req.params.n2),
    other: req.query.other,
  });
});

server.get('/favicon.ico', (req, res) => {
  res.sendFile('C:/Users/ericc/NodeTest/favicon.ico');
});

server.get('/results', (req, res) => {
  res.send(results);
});

server.get('/result/:id', (req, res) => {
  if (validateExistence(parseInt(req.params.id), res)) {
    res.json(results[parseInt(req.params.id)]);
  }
});

server.delete('/result/:id', (req, res) => {
  if (validateExistence(parseInt(req.params.id), res)) {
    results.splice(parseInt(req.params.id), 1);
    res.send(results);
  }
});

server.put('/result/:id', (req, res) => {
  if (validateExistence(parseInt(req.params.id), res)) {
    results[parseInt(req.params.id)] = req.body.data;
    res.send(results);
  }
});

server.post('/results', (req, res) => {
  results.push(req.body.data);
  res.send(results);
});

server.listen(process.env.PORT || 3000);

function validateExistence(id, res) {
  if (isNaN(id)) {
    res.status(501).send('parameter is not a number');
    return false;
  }
  if (id >= results.length) {
    res.status(404).send('number not found');
    return false;
  }
  if (id < 0) {
    res.status(404).send('number should not be negative');
    return false;
  }
  return true;
}

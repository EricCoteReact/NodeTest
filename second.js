import express from 'express';

const server = express();
server.use(express.json());

let results = [32, 45, 67, 78, 84];

server.get('/', (req, res) => {
  res.send([4, 5, 6]);
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
  res.json(results[req.params.id]);
});

server.post('/results', (req, res) => {
  results.push(req.body.data);
  res.send(results);
});

server.get('/test/:n1/:n2', (req, res) => {
  //res.json(parseInt(req.params.n1) + parseInt(req.params.n2));
  res.jsonp('<h1>test</h1>');
});

server.listen(3000);

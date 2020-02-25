import http from 'http';

function hello(req, res) {
  res.write('<h1>Hello World!</h1>');
  res.end();
}

let srv = http.createServer(hello);

srv.listen(3000);

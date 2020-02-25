import http from 'http';

function hello(req, res) {
  let url = new URL('http://localhost' + req.url);

  switch (url.pathname) {
    case '/':
      res.write('<h1>This is the homePage<h1>');
      break;
    case '/hello':
      res.write('<h1>Hello World<h1>');
      break;
    case '/test':
      let amount = url.searchParams.get('amount');
      res.write(`<h1>This test Page with amount ${amount} <h1>`);
      break;
    default:
      res.write('<h1>this is error 404</h1>');
      break;
  }
  res.end();
}

let srv = http.createServer(hello);

srv.listen(3000);

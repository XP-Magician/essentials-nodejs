import http from 'node:http';
import checkPort from './portFinder.mjs';

const app = http.createServer((request, response) => {
  console.log(request);
  response.end('hello world');
});

const port = await checkPort(3000);
app.listen(port, () => console.log('SERVER RUNNING AT : http://localhost:' + port));
console.log('unoo');
console.log('2');
console.log('3');
console.log('4' + port);
console.log('u5');
console.log('6');

import express from 'express';
// Server config
const PORT = process.env.PORT ?? 3000;

// Middlewares
const app = express();
app.use(express.json());

// Paths
app.get('/', ({ url, method }, response) => {
  console.log(`URL: ${url}\nMETHOD: ${method}`);
  response.status(200).contentType('text/plain').send('Solicitaste la ruta vacia');
});

app.get('/test', ({ url, method }, response) => {
  console.log(`URL: ${url}\nMETHOD: ${method}`);
  response.status(200).contentType('text/plain').send('Solicitaste la ruta vacia');
});

app.get('/another', ({ url, method }, response) => {
  console.log(`URL: ${url}\nMETHOD: ${method}`);
  response.status(200).contentType('text/plain').send('Solicitaste la ruta vacia');
});

app.post('/', (request, response) => {
  const { url, method } = request;
  console.log(`URL: ${url}\nMETHOD: ${method}`);
  response.json(request.body);
});

app.use(({ url, method }, response) => {
  console.log(`URL: ${url}\nMETHOD: ${method}`);
  response.status(404).send('NOT FOUND');
});

// SERVER INIT
app.listen(PORT, console.log('RUNNING SERVER AT :' + PORT));

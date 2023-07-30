import http from 'http';
import { promisify } from 'util';
// Server config
const port = 3000;

// Middlewares
const getContent = (request, callback) => {
  let chunks = '';
  request.on('data', chunk => {
    chunks += chunk.toString();
  });
  request.on('end', () => {
    const body = JSON.parse(chunks);
    callback(null, body);
  });

  request.on('error', err => callback(err));
};

const handleGET = async (request, resp) => {
  // handle response by url
  const { url } = request;
  resp.setHeader('Content-Type', 'text/plain;charset=utf-8');
  resp.status = 200;
  switch (url) {
    case '/':
      resp.end(`Solicitaste la url vacia: ${url}`);
      break;

    case '/test':
      resp.end(`Solicitaste la url test: ${url}`);
      break;
    case '/app':
      resp.end(`Solicitaste la url app: ${url}`);
      break;
    case '/hello':
      resp.end(`Solicitaste la url hello: ${url}`);
      break;
    default:
      resp.status = 404;
      resp.end('Recurso no encontrado');
  }
};

const handlePOST = async (request, resp) => {
  // handle response by url
  const { url } = request;
  resp.setHeader('Content-Type', 'application/json;charset=utf-8');
  resp.status = 200;
  switch (url) {
    case '/':{
      const promessData = promisify(getContent);
      const body = await promessData(request);
      resp.end(JSON.stringify(body));
      break;
    }

    default:{
      resp.status(404);
      resp.end('Recurso no encontrado');
      break;
    }
  }
};

const handleResponse = (req, resp) => {
  // Analize url
  switch (req.method) {
    case 'GET' :
      handleGET(req, resp);
      break;
    case 'POST':
      handlePOST(req, resp);
      break;
    default:
      resp.status = 304;
      resp.end();
  }
};

// iNIT SERVER
const app = http.createServer(handleResponse);
app.listen(port, console.log('SERVER RUNNING AT ' + port));

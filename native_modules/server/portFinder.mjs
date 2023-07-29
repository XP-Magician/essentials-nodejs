import net from 'node:net';

const checkPort = (desirablePort) => {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(desirablePort, () => { server.close(); resolve(desirablePort); });
    server.on('error', (err) => {
      err.code === 'EADDRINUSE' ? resolve(0) : reject(err);
    });
  });
};

export default checkPort;

const http = require('http');
const router = require('./router');
require('env2')('.env');

const port = process.env.PORT || 8000;

const server = http.createServer(router);
// eslint-disable-next-line no-console
server.listen(port, () => console.log(`server listenting on http://localhost:${port}`));

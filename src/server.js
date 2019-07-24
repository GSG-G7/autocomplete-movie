const http = require('http');
const router = require('./router');

// let port = process.env.PORT;
// if (port === '' || port === undefined) {
const port = 8000;
// }
const server = http.createServer(router);
// eslint-disable-next-line no-console
server.listen(port, () => console.log(`server listenting on http://localhost:${port}`));

const {
  homeHandler,
  staticsHandler,
  findHandler,
  getMovieDetailsHandler,
} = require('./handlers');

const router = (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.method, req.url);
  const endpoint = req.url;
  if (endpoint === '/') {
    homeHandler(req, res);
  } else if (endpoint.includes('/public/')) {
    staticsHandler(req, res);
  } else if (endpoint.includes('/find')) {
    findHandler(req, res);
  } else if (endpoint.includes('/get')) {
    getMovieDetailsHandler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Not Found<h1>');
  }
};

module.exports = router;

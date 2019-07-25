const request = require('request');
const getMime = require('../getMime');

const moviedbDetails = id => `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIESDB}&language=en-US`;

module.exports = (req, res) => {
  request(moviedbDetails(req.url.slice(7)), (err, response, body) => {
    if (err) {
      res.writeHead(404, getMime('html'));
      res.end('<h1>Not Found 404<h1>');
    } else {
      res.writeHead(response.statusCode, getMime('json'));
      res.end(body);
    }
  });
};

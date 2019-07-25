const fs = require('fs');
const path = require('path');
const getMime = require('../getMime');
const { extractTitles } = require('../logic');

module.exports = (req, res) => {
  const query = req.url.slice(8);// /find?q=asld => asld
  const filePath = path.join(__dirname, '..', '/model', 'movies.json');
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, getMime('html'));
      res.end('<h1>Internal Server Error</h1>');
    } else {
      const results = { results: extractTitles(query, JSON.parse(file.toString())) };
      res.writeHead(200, getMime('json'));
      res.end(JSON.stringify(results));
    }
  });
};

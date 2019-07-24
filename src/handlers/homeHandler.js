const fs = require('fs');
const path = require('path');
const getMime = require('../getMime');

module.exports = (req, res) => {
  const filePath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, getMime('html'));
      res.end('<h1>Internal Server Error</h1>');
    } else {
      res.writeHead(200, getMime('html'));
      res.end(file);
    }
  });
};

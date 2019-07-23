const fs = require('fs');
const path = require('path');
const getMime = require('../getMime');

module.exports = (req, res) => {
  const endpoint = req.url;
  const ext = endpoint.split('.')[1];
  const filePath = path.join(__dirname, '..', '..', ...endpoint.split('/'));
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, getMime(ext));
      res.end(file);
    }
  });
};

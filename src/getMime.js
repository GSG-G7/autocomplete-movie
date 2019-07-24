module.exports = (ext) => {
  const MIMETYPES = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    json: 'application/json',
  };
  return { 'Content-Type': MIMETYPES[ext] };
};

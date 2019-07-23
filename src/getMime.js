module.exports = (ext) => {
  const MIMETYPES = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
  };
  return { 'Content-Type': MIMETYPES[ext] };
};

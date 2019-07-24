const extractTitles = (query, Obj) => Obj.arr.filter(
  el => el.title.toLowerCase().startsWith(query.toLowerCase()),
);

module.exports = {
  extractTitles,
};

const extractTitles = (query, Obj) => Obj.arr.filter(
  el => el.title.toLowerCase().startsWith(query.toLowerCase()),
);


if (typeof module !== 'undefined') module.exports = { extractTitles };

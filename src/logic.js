const extractTitles = (query, Obj) => Obj.results.filter(
  el => el.title.toLowerCase().startsWith(query.toLowerCase().split('+').join(' ')),
);


if (typeof module !== 'undefined') module.exports = { extractTitles };

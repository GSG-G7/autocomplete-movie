const extractTitles = (query, Obj) => {
  const matchTitles = Obj.arr.filter(el => el.title.startsWith(query));
  return matchTitles;
};


if (typeof module !== 'undefined') module.exports = extractTitles;

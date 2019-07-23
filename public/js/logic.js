const fetchTitles = (query, Obj) => {
  let matchTitles = Obj.arr.filter(el => el.title.startsWith(query));
  matchTitles = matchTitles.map(ele => ele.title);
  // return ['Boyz n the Hood', 'Boyz ukmukjfyh', 'Boyz kdtg djfh '];
  return matchTitles;
};

module.exports = {
  fetchTitles,
};

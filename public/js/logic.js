const extractTitles = (query, Obj) => {
  const matchTitles = Obj.arr.filter(el => el.title.startsWith(query));
  return matchTitles;
};

const extractDetails = res => ({
  name: res.original_title,
  posterLink: `https://image.tmdb.org/t/p/w500${res.poster_path}`,
  overview: res.overview,
  genre: res.genres.map(e => e.name),
  rating: res.vote_average,
});
module.exports = {
  extractTitles,
  extractDetails,
};

const extractDetails = res => ({
  name: res.original_title,
  posterLink: `https://image.tmdb.org/t/p/w500${res.poster_path}`,
  overview: res.overview,
  genre: res.genres.map(e => e.name),
  rating: res.vote_average,
});

const titlesArray = (input, response) => {
  const title = response.results.filter(ele => ele.title.startsWith(input));
  return title;
};

if (typeof module !== 'undefined') module.exports = { extractDetails, titlesArray };

let array;
const selector = id => document.querySelector(`#${id}`);
const searchInput = selector('search-input');
const searchSection = selector('search-section');
const createE = tag => document.createElement(tag);
const renderSuggestions = (res) => {
  const suggestedTitles = res.results;
  const suggestions = selector('suggestions');
  const newDatalist = document.createElement('datalist');
  suggestedTitles.forEach((ele) => {
    const option1 = document.createElement('option');
    option1.value = ele.title;
    option1.classList.add('option');
    newDatalist.appendChild(option1);
  });
  newDatalist.classList.add = 'suggestions';
  newDatalist.id = 'suggestions';
  searchSection.replaceChild(newDatalist, suggestions);
};
searchInput.addEventListener('keyup', (e) => {
  const inputValue = e.target.value.toLowerCase().split(' ').join('+');
  if (inputValue.length) {
    generateXhr(`/find?q=${inputValue}`, (res) => {
      if (inputValue.length === 1) array = res;
      renderSuggestions(res);
    });
  }
});

const createMovieNode = (obj) => {
  const div = createE('div');
  const imgDiv = createE('div');
  const textDiv = createE('div');
  const title = createE('h2');
  const img = createE('img');
  const overview = createE('p');
  const genre = createE('p');
  const ratingDiv = createE('div');
  const rating = createE('span');
  const ratingIco = createE('i');

  rating.textContent = ` ${obj.rating}`;
  title.textContent = obj.name;
  img.src = obj.posterLink;
  overview.textContent = obj.overview;
  genre.textContent = `Genre: ${obj.genre.join(', ')}`;

  ratingIco.classList.add('fas', 'fa-star', 'star-color');
  imgDiv.classList.add('result-movie-imageDiv');
  textDiv.classList.add('result-movie-textDiv');

  ratingDiv.appendChild(ratingIco);
  ratingDiv.appendChild(rating);
  textDiv.appendChild(title);
  textDiv.appendChild(ratingDiv);
  textDiv.appendChild(overview);
  textDiv.appendChild(genre);
  imgDiv.appendChild(img);

  div.appendChild(imgDiv);
  div.appendChild(textDiv);
  div.classList.add('result-movieNode');

  return div;
};

selector('search-btn').addEventListener('click', () => {
  try {
    const { id } = array.results.find(e => e.title === searchInput.value.trim());
    generateXhr(`/get?q=${id}`, (res) => {
      const container = createE('div');
      container.id = 'result-movie-container';
      const oldContainer = selector('result-movie-container');
      container.appendChild(createMovieNode(extractDetails(res)));
      selector('result-movie').replaceChild(container, oldContainer);
    });
  } catch (err) {
    // eslint-disable-next-line no-alert
    const errorMessage = createE('p');
    errorMessage.textContent = 'No results match your input!';
    selector('result-movie-container').appendChild(errorMessage);
  }
});

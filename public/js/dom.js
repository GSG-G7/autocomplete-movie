const selector = id => document.querySelector(`#${id}`);
const searchInput = selector('search-input');
const searchSection = selector('search-section');

const callback = (res) => {
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
let array;
searchInput.addEventListener('keyup', (e) => {
  const inputValue = e.target.value;
  generateXhr(`/find?q=${inputValue}`, (res) => {
    callback(res);
  });
});

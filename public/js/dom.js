const selector = id => document.querySelector(`#${id}`);
const searchInput = selector('search-input');
const searchSection = selector('search-section');

const callback = (res) => {
  const suggestedTitles = res.results.slice(0, 10);
  const suggestions = selector('suggestions');
  const newDatalist = document.createElement('datalist');
  suggestedTitles.forEach((ele) => {
    const option1 = document.createElement('option');
    option1.value = ele.title;
    newDatalist.appendChild(option1);
  });
  newDatalist.classList.add = 'suggestions';
  newDatalist.id = 'suggestions';
  searchSection.replaceChild(newDatalist, suggestions);
};
let array;
searchInput.addEventListener('keyup', (e) => {
  const inputValue = e.target.value;

  if (inputValue.length === 1) {
    // eslint-disable-next-line no-undef
    generateXhr(`/find?q=${inputValue}`, (res) => {
      array = res;
      callback(array);
    });
  } else {
    const newRes = titlesArray(inputValue, array);
    callback(newRes);
  }
});

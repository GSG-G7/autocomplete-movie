// const fetchTitles = require('./logic.js');

const selector = id => document.querySelector(`#${id}`);
const suggestions = selector('suggestions');
const input = selector('search-input');

input.addEventListener('keydown', (e) => {
  const inputValue = e.target.value;
  generateXhr(`/find?q=${inputValue}`, () => {

  });
  extractTitles(inputValue, Obj);
  const option1 = document.createElement('option');
  option1.value = e.target.value;
  suggestions.appendChild(option1);
//   console.log();


//   fetchTitles(inputValue, object);

});

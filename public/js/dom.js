const selector = id => document.querySelector(`#${id}`);
const searchInput = selector('search-input');
const searchSection = selector('search-section');

const titlesArray = (input, result) => {
  const title = result.results.filter(ele => ele.title.startsWith(input));
  return title;
};

searchInput.addEventListener('keyup', (e) => {
  const inputValue = e.target.value;

  const callback = (res) => {
    const suggestedTitles = titlesArray(inputValue, res);
    const suggestions = selector('suggestions');
    const newDatalist = document.createElement('datalist');
    console.log(suggestedTitles);
    suggestedTitles.forEach((ele) => {
      const option1 = document.createElement('option');
      option1.value = ele.title;
      newDatalist.appendChild(option1);

      //   suggestions.removeChild(option1);
    });
    newDatalist.classList.add = 'suggestions';
    newDatalist.id = 'suggestions';
    searchSection.replaceChild(newDatalist, suggestions);
  };

  const test = { results: [{ id: 650, title: 'Boyz n the Hood' }, { id: 661, title: 'Boyz ukmukjfyh' }, { id: 662, title: 'Boyz kdtg djfh ' }] };
  callback(test);

  // eslint-disable-next-line no-undef
  //   generateXhr(`/find?q=${inputValue}`, callback);

  //   extractTitles(inputValue, Obj);
});

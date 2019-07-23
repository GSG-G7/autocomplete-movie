
const generateXhr = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // console.log(JSON.parse(xhr.responseText));
        callback(JSON.parse(xhr.responseText));
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
};

generateXhr('/find', (res) => {
  console.log(res);
});

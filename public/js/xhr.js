
const generateXhr = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // console.log(JSON.parse(xhr.responseText));
        callback(JSON.parse(xhr.responseText));
      } else if (xhr.status === 404) {
        console.log('404 Page Not Found');
      } else if (xhr.status === 500) {
        console.log('Server Error');
      } else {
        console.log(xhr.status);
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
};

generateXhr('/find', (res) => {
  console.log(res);
});

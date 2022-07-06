
function randoDogAPI() {
    var requestUrl = 'https://dog.ceo/api/breeds/image/random';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('hello');
        var dogContainer = document.createElement('container');
        THISISFILLER.appendChild(dogContainer);
    });
}

randoDogAPI();
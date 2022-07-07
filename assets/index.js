var healthOrgApi = 'https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=30560';
var dogBtnEl = document.querySelector('#dogBtn')



function randoDogAPI() {
    var requestUrl = 'https://dog.ceo/api/breeds/image/random';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.message);
      var url = data.message
      var fillDogImg = document.querySelector('#dogImg').setAttribute('src', url);
      return fillDogImg;
    });
}

randoDogAPI();
dogBtnEl.addEventListener('click', randoDogAPI);
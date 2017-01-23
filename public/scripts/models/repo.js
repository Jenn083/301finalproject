'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE: Refactor your ajax call to use the $.get method, and make a request to our new proxy route.
    $.get('kingcounty/resource/gkhn-e8mn.json?zip_code=98109') //remove .com!!
    .then(data => repos.all = data, err => console.error(err)) // es6 syntax arrow functions
    .then(callback);
  };

  $.ajax({
    url: 'https://data.kingcounty.gov/resource/f29f-zza5.json?zip_code=98109',
    type: 'GET',
    data: {
      '$limit' : 5000,
      '$$app_token': '9vDySgx7Ckb1nzJ38UuD02Hbw'
    }
  }).done(function(data) {
  // alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
  });

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);

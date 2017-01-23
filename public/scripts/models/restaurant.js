'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE: Refactor your ajax call to use the $.get method, and make a request to our new proxy route.
    $.get('https://data.kingcounty.gov/resource/gkhn-e8mn.json?$$app_token=9vDySgx7Ckb1nzJ38UuD02Hbw&$where=inspection_date%20between%20%272015-01-10T12:00:00%27%20and%20%272017-01-10T14:00:00%27&$limit=2000') //remove .com!!
    .then(data => repos.all = data, err => console.error(err)) // es6 syntax arrow functions
    .then(callback);
  };


  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);

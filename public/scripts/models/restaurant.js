'use strict';

(function(module) {
  function Restaurant(opts) {
    this.address= opts.address;
    this.city=opts.city;
    this.name=opts.name;
    this.longitude=opts.longitude;
    this.latitude=opts.latitude;
    this.violation_description=opts.violation_description;
    this.inspection_score=opts.inspection_score;
    this.inspection_date=opts.inspection_date;
    restaurants.all.push(this);//doublecheck
  }

  const restaurants = {};

  restaurants.all = [];

  restaurants.requestRestaurant = function(callback) {
    // DONE: Refactor your ajax call to use the $.get method, and make a request to our new proxy route.
    $.get('https://data.kingcounty.gov/resource/gkhn-e8mn.json?$$app_token=9vDySgx7Ckb1nzJ38UuD02Hbw&$where=inspection_date%20between%20%272015-01-10T12:00:00%27%20and%20%272017-01-10T14:00:00%27&$limit=2000') //remove .com!!
    .then(data => restaurants.all = data, err => console.error(err)) // es6 syntax arrow functions
    .then(callback);
  };


  restaurants.with = attr => restaurants.all.filter(repo => repo[attr]);

  module.restaurants = restaurants;
})(window);

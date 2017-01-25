'use strict';

(function(module) {
  function Restaurant(opts) {
    this.address= opts.address;
    this.city=opts.city;
    this.name=opts.name;
    this.zip_code=opts.zip_code;
    this.longitude=opts.longitude;
    this.latitude=opts.latitude;
    this.violation_description=opts.violation_description;
    this.inspection_score=opts.inspection_score;
    this.inspection_date=opts.inspection_date.split('T')[0]; //split at the T and take the first half;
    restaurants.all.push(this);//doublecheck
  }

  const restaurants = {};

  restaurants.all = [];

  restaurants.requestRestaurant = function(callback) {
    $.get('https://data.kingcounty.gov/resource/gkhn-e8mn.json?$$app_token=9vDySgx7Ckb1nzJ38UuD02Hbw&$where=inspection_date%20between%20%272015-01-10T12:00:00%27%20and%20%272017-01-10T14:00:00%27&$limit=20')
    .then(data => data.forEach(restaurant => { new Restaurant(restaurant); }))
    .then(callback);
  };

  //all cities. capitalized by default and removes dupes (SEATTLE and Seattle). this can be used for our drop down for the user to select. we can use this as our drop down for the user.
  restaurants.allCities = () => {
    return restaurants.all.map(element => element.city.toUpperCase())
    .reduce((cities, city) => {
      if (cities.indexOf(city) === -1) cities.push(city);
      return cities;
    }, []);
  };
  //restaurants with the matched city --need to figure out how to pass in the city variable (what the user selects) to this code.
  restaurants.selectCity = () => {
    return restaurants.all.filter(function(element){
      let tempCityUpper = element.city.toUpperCase(); //toUpperCase because some cities were upper or lowercase, so depending on what the user input, it will return different results
      return tempCityUpper === `${city}`
      //e.g, SEATTLE' needs to be in CAPS
    })
  };

  Restaurant.prototype.position = function() {
    return {lat: this.latitude, lng: this.longitude};
  }


  restaurants.with = attr => restaurants.all.filter(repo => repo[attr]);

  module.restaurants = restaurants;
})(window);

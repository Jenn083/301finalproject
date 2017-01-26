'use strict';

(function(module) {
  const homeController = {};

  homeController.index = () => {
    $('#home').show().siblings().hide();
    restaurants.requestRestaurant(restaurantView.index);//load all restaurants in homepage make request to all restaurants
    $( 'select' ) // call selectLocation on select change
      .change(function () {
        var city = '';
        $( 'select option:selected' ).each(function() {
          city += $( this ).val();
        });
        restaurantView.selectLocation(city);
      }).change();
  };//callback function is in restaurantView-where you populate marker
  module.homeController = homeController;
})(window);
//model is restaurant
//view is restaurantView
//homeController everything in homepage

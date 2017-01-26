'use strict';

(function(module) {
  const homeController = {};

  homeController.index = () => {
    $('#home').show().siblings().hide();
    restaurants.requestRestaurant(restaurantView.index);
  };
  module.homeController = homeController;
})(window);

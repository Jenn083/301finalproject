'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    restaurants.requestRestaurant(restaurantView.index);
  };

  module.aboutController = aboutController;
})(window);

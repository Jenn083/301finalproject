'use strict';

(function(module) {
  const restaurantView= {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#restaurant-template').text());

  restaurantView.index = function() {
    ui();

    $('#about ul').append(
      restaurants.with('name').map(render)
    );
  };

  module.restaurantView= restaurantView;
})(window);

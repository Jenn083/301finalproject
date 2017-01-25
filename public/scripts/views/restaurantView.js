'use strict';

(function(module) {
  const restaurantView= {};
  restaurantView.markers=[];
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


  restaurantView.markerMaker = function() {
    console.log('in markerMaker');
    restaurants.all.forEach(function(data){
      var markerOption = {
        position: {lng:parseFloat(data.longitude), lat:parseFloat(data.latitude)},
        map:map,
        address:data.address,
        animation: google.maps.Animation.DROP
      };
      console.log(markerOption);
      var marker = new google.maps.Marker(markerOption);
      // restaurantView.markers.push(marker);
      });
// +++++++++++++++++++++++++

      markerOption.onclick = function() {myFunction()};
      console.log ('this is onclick listener')

      function myFunction() {
        markerOption("displayMarkerOption").innerHTML = 'click on me';
        console.log ('this display marker handler');
        }

    });
  }
  module.restaurantView = restaurantView;
})(window);

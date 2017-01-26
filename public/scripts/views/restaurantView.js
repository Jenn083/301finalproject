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
      var markerMarkup = marker.address + '' + marker.city + '' + marker.name + ''+ marker.zip_code + '' + marker.longitude + '' + marker.latitude + '' + marker.violation_description + '' + marker.inspection_score + '' + marker.inspection_date;
      google.maps.event.addListener(marker, 'click', function(){
        document.getElementById("displayMarkerOptions").innerHTML = markerMarkup;

        console.log(marker.address);
        console.log ('does this work?');
      })

    });
  }
  restaurants.requestRestaurant();

  module.restaurantView = restaurantView;
})(window);

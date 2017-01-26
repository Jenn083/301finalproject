'use strict';

(function(module) {
  const restaurantView= {};
  restaurantView.markers=[];

  const render = Handlebars.compile($('#restaurant-template').text());

  restaurantView.index = function() {
    restaurantView.getLocation();//get all cities
    restaurantView.markerMaker(restaurants.all);//populate all restaurants
  };

  restaurantView.getLocation = () => {
    restaurants.allCities().map((city) => {
      $('.list').append(`<option value=${city}>${city}</option>`)
    });
  }

  restaurantView.selectLocation = (city) => {
    var selectRestaurantByCity = city === 'all'? restaurants.all : restaurants.selectCity(city);//get restaurant by city
    restaurantView.markerMaker(selectRestaurantByCity);//pass in list of restaurants to map
  }

  restaurantView.markerMaker = function(restaurantList) {
    var map = initMap();
    restaurantList.forEach(function(data){
      var markerOption = {
        position: {lng:parseFloat(data.longitude), lat:parseFloat(data.latitude)},
        map:map,
        address:data.address,
        animation: google.maps.Animation.DROP
        // icon: {
        //   url: `data:image/svg+xml;utf-8, \
        //   <svg width="30" height="30" viewBox="0 0 30 30"> \
        //         <rect width="30" height="30" fill="#008d46" />
        //         </svg>`
        // }
      };
      var restaurantInfo = `
        <div id="restaurantInfo">
          <h1>${data.name}</h1>
          <div class="restaurantAddress">
            <div><span>Address:</span> ${data.address} </div>
            <div><span>City:</span> ${data.city} </div>
            <div><span>Zip_code:</span> ${data.zip_code} </div>
          </div>
          <div class="violationHistory">
            <div><span>Inspection Date:</span> ${data.inspection_date} </div>
            <div><span>Inspection Score:</span> ${data.inspection_score} </div>
            <div><span>Violation Description:</span> ${data.violation_description} </div>
          </div>
        </div>
      `;
      var infowindow = new google.maps.InfoWindow({
        content: restaurantInfo
      });
      var marker = new google.maps.Marker(markerOption);

      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });
    });
  }
  restaurants.requestRestaurant();

  module.restaurantView = restaurantView;
})(window);

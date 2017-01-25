Tests

1. OnClick 
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
      markerOption("displayMarkerOption").innerHTML = restaurant.all;
      console.log ('this display marker handler');
      }

<<<<<<< HEAD

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
  1.1
  google.maps.event.addListener(marker, 'click', function(){
    console.log ('does this work?');
  })


  1.2 google.maps.Marker.addListener(markerOption, 'click', function(){
    console.log ('does this work?');
  })

  2.  markerOption.onclick = function() {myFunction()};
    console.log ('this is onclick listener')

    function myFunction() {
      markerOption("displayMarkerOption").innerHTML = restaurant.all;
      console.log ('this display marker handler');
      }
=======
google.maps.event.addListener(marker, 'click', function(){
  console.log ('does this work?');
})
>>>>>>> 520c4b69b40aaf9ee79a237545cc71f04da30a71

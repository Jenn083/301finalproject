var mapOptions = {
  zoom: 15,
  styles: stylesArray,
  center: new google.maps.LatLng(47.618217, -122.351832),
  mapTypeId: google.maps.MapTypeId.STREET,
  zoomControl: true,
  zoomControlOptions: {
    position: google.maps.ControlPosition.RIGHT_CENTER
  }
}

var map = new google.maps.Map(document.getElementById('map'), mapOptions);
//Make the map responsive:

google.maps.event.addDomListener(window, 'resize', function() {
  var center = map.getCenter();
  google.maps.event.trigger(map, 'resize');
  map.setCenter(center);
});
//After demoing that it works, add a marker!

var marker = new google.maps.Marker({
  position: {lat: 47.618217, lng: -122.351832},
  map: map,
});

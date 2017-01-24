'use strict';
(function(module){
// function initMap() {
//         // Styles a map in night mode.
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 40.674, lng: -73.945},
//     zoom: 12,
//     styles: [
//             {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//             {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//             {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//       {
//         featureType: 'administrative.locality',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#d59563'}]
//       },
//       {
//         featureType: 'poi',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#d59563'}]
//       },
//       {
//         featureType: 'poi.park',
//         elementType: 'geometry',
//         stylers: [{color: '#263c3f'}]
//       },
//       {
//         featureType: 'poi.park',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#6b9a76'}]
//       },
//       {
//         featureType: 'road',
//         elementType: 'geometry',
//         stylers: [{color: '#38414e'}]
//       },
//       {
//         featureType: 'road',
//         elementType: 'geometry.stroke',
//         stylers: [{color: '#212a37'}]
//       },
//       {
//         featureType: 'road',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#9ca5b3'}]
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'geometry',
//         stylers: [{color: '#746855'}]
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'geometry.stroke',
//         stylers: [{color: '#1f2835'}]
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#f3d19c'}]
//       },
//       {
//         featureType: 'transit',
//         elementType: 'geometry',
//         stylers: [{color: '#2f3948'}]
//       },
//       {
//         featureType: 'transit.station',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#d59563'}]
//       },
//       {
//         featureType: 'water',
//         elementType: 'geometry',
//         stylers: [{color: '#17263c'}]
//       },
//       {
//         featureType: 'water',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#515c6d'}]
//       },
//       {
//         featureType: 'water',
//         elementType: 'labels.text.stroke',
//         stylers: [{color: '#17263c'}]
//       }
//     ]
//   });
// }
  var styleArray = [
    {
      featureType:"all",
      stylers: [
      {hue:"#00ffe6"},
      {saturation:-20}
      ]
    },
    {
      featureType:"road",
      elementType:"geometry",
      stylers: [
      {lightness: 100},
      {visibility:"simplified"}
      ]
    },
    {
      featureType:"road",
      elementType:"labels",
      stylers: [
      { visibility:"off"}
      ]
    }
  ];
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
  module.map = map;
})(window);

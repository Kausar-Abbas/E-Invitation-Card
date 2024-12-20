// var google;

// function init() {
//     // Coordinates from the iframe (33.7481737, 72.7046701)
//     var myLatlng = new google.maps.LatLng(33.7481737, 72.7046701);

//     var mapOptions = {
//         // Zoom level
//         zoom: 10,
//         // Latitude and longitude for the center of the map
//         center: myLatlng,
//         // Disable scroll wheel zoom
//         scrollwheel: false,
//         // Style options for the map
//         styles: [
//             {"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},
//             {"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},
//             {"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},
//             {"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},
//             {"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},
//             {"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},
//             {"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},
//             {"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},
//             {"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},
//             {"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},
//             {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
//             {"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}
//         ]
//     };

//     // Get the HTML DOM element that will contain your map 
//     var mapElement = document.getElementById('map');

//     // Create the Google Map using the element and options defined above
//     var map = new google.maps.Map(mapElement, mapOptions);

//     var addresses = ['Brooklyn'];

//     // Adding markers for each address
//     for (var x = 0; x < addresses.length; x++) {
//         $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + addresses[x] + '&sensor=false', null, function (data) {
//             var p = data.results[0].geometry.location;
//             var latlng = new google.maps.LatLng(p.lat, p.lng);

//             // Add a marker for each location
//             new google.maps.Marker({
//                 position: latlng,
//                 map: map,
//                 icon: 'images/loc.png'
//             });
//         });
//     }
// }

// // Initialize the map when the window loads
// google.maps.event.addDomListener(window, 'load', init);

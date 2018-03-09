// function myMap() {
//     var mapCanvas = document.getElementById("map");
//     //define map properties
//     var mapOptions = {
//         //specify where to center the map
//         center: new google.maps.LatLng(52.367531, 4.872981),
//         //specify the zoom level for the map
//         zoom: 10
//     };
//     var map = new google.maps.Map(mapCanvas, mapOptions);
// }

function initMap() {

  var isDraggable = $(document).width() > 480 ? true : false; // If document (your website) is wider than 480px, isDraggable = true, else isDraggable = false

  var myLatLng = {lat: 52.367531, lng: 4.872981};

  var map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 17,
    center: myLatLng,
    draggable: isDraggable,

    scrollwheel: false, // Prevent users to start zooming the map when scrolling down the page
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });

  map.setOptions({draggable: true});
}

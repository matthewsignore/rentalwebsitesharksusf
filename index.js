let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 28.0698, lng: -82.419 },
    zoom: 8,
  });
}

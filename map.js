

function initMap(){
  let options = {
    zoom: 16,
    center: {lat: 38.9901451, lng: -74.8067653}
  }

  let map = new google.maps.Map(document.getElementById('map'), options)

  let marker = new google.maps.Marker({
    position:{lat: 38.9901451, lng: -74.8067653},
    map:map
  });

  let info = new google.maps.InfoWindow({
    content: "<p>Eric's Pizza Palace<br>2600 Boardwalk</p>"
  });

  marker.addListener('click', function(){
    info.open(map, marker);
  });
}

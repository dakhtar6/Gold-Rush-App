// array to store the markers the user creates

var markers = [];

function initialize() {

  var mapOptions = {

    center: { lat: 39.1950, lng: -106.8370},
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.HYBRID

  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  google.maps.event.addListener(map, 'click', function(e) {

  // create a new marker where the user clicked

    marker = new google.maps.Marker({

      position: e.latLng,
      map: map,

      draggable: true,
      animation: google.maps.Animation.DROP

    });

    console.log(marker);

    markers.push(marker);

    // markers[id] = marker.__gm_id;
    // markers[id] = marker;

    google.maps.event.addListener(marker, 'click', function(e) {

      marker.setMap(null);

    });

  });


}

google.maps.event.addDomListener(window, 'load', initialize);

var map;

function initMap() {
    var copenhagen = {
        lat: 55.68420,
        lng: 12.57954
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: copenhagen
    });

    var marker = new google.maps.Marker({
        position: copenhagen,
        map: map,
        title: 'Hello Copenhagen!'
    });
}

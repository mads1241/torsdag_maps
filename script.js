var map;

function initMap() {
    var copenhagen = {
        lat: 55.68420,
        lng: 12.57954
    }

    var hjem = {
        lat: 55.655077,
        lng: 12.548539
    }
    var lygten = {
        lat: 55.706359,
        lng: 12.539151
    }
    var frederiksberg = {
        lat: 55.681028,
        lng: 12.506096
    }
    var gamle_kollegie = {
        lat: 55.638216,
        lng: 12.600689
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: copenhagen
    });

    var marker = new google.maps.Marker({
        position: copenhagen,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: 'images/pin.png',
        title: 'Hello Copenhagen!'
    });
    var marker2 = new google.maps.Marker({
        position: hjem,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        title: 'Home, sweet home!'
    });
    var marker3 = new google.maps.Marker({
        position: lygten,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Lygten 16!'
    });
    var marker4 = new google.maps.Marker({
        position: frederiksberg,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Julius Valentiners Vej!'
    });
    var marker5 = new google.maps.Marker({
        position: gamle_kollegie,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Følfodvej!'
    });

}

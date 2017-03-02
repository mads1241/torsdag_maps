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
        animation: google.maps.Animation.DROP,
        title: 'Home, sweet home!'
    });
    var marker3 = new google.maps.Marker({
        position: lygten,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Lygten 16!'
    });

    var indsatContent = document.querySelector("#copenhagen_info");
    var indsatContent2 = document.querySelector("#hjem_info");
    var indsatContent3 = document.querySelector("#lygten_16_info");

    var infowindow = new google.maps.InfoWindow({
        content: "København"
    })


    var infowindow2 = new google.maps.InfoWindow({
        content: "Hjem"

    })


    var infowindow3 = new google.maps.InfoWindow({
        content: "Lygten 16"
    })

    marker.addListener('click', function () {
        map.setZoom(16);
        map.setCenter(marker.getPosition());

        infowindow.open(map, marker);
        infowindow.setContent(indsatContent);
    });

    marker2.addListener('click', function () {
        map.setZoom(16);
        map.setCenter(marker2.getPosition());

        infowindow2.open(map, marker2);
        infowindow2.setContent(indsatContent2);
    });
    marker3.addListener('click', function () {
        map.setZoom(16);
        map.setCenter(marker3.getPosition());
        infowindow3.open(map, marker3);
        infowindow3.setContent(indsatContent3);
    });

}

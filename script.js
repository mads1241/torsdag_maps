window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    $.getJSON("steder.json", initMap)
    var map;

}

function initMap() {
    var copenhagen = {
        lat: 55.68420,
        lng: 12.57954
    }

    var infowindow = new google.maps.InfoWindow({});

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: copenhagen
    });
}

function lavSted(sted) {
    var ll = new google.maps.LatLng(sted.lat, sted.lng);
    var m = new google.maps.Marker({
        position: ll
    });
    var w = new google.maps.InfoWindow({
        maxWidth: 100
    });
    m.addListener("click", visInfo);

    function visInfo() {
        document.querySelector("#maps_template").content.cloneNode(true);
        tempInfo.querySelector("h2").innerHTML = sted.navn;
        tempInfo.querySelector("p").innerHTML = sted.beskrivelse;
    }

}

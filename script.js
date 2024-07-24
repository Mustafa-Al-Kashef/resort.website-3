function initMap() {
    var resortLocation = { lat: 24.7136, lng: 46.6753 }; // موقع افتراضي، قم بتحديثه حسب الموقع الفعلي
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: resortLocation
    });
    var marker = new google.maps.Marker({
        position: resortLocation,
        map: map
    });
}

window.onload = function() {
    initMap();
}


    function initMap() {
        var resortLocation = { cKVdjzHg3sg4zA3R8 }; // موقع افتراضي، قم بتحديثه حسب الموقع الفعلي
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: resortLocation
        });
        var marker = new google.maps.Marker({
            position: resortLocation,
            map: map
        });
    }

    window.onload = function() {
        initMap();
    }



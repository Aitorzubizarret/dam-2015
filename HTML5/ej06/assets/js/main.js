(function() {
    console.log("Geolocation...");

    navigator.geolocation.getCurrentPosition(function(e) {
        console.log(e);
    });
})();
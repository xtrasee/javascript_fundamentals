function curSuccess(pos) {
    const coords = pos.coords;

    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Within: ${coords.accuracy} meters`);
}

function curError(err) {
    console.log(`error: ${err.code} - ${err.message}`);
}

const options = {
    enableHighAccuracy: true, //use gps if available
    time: 500, // time to wait to stop trying for location
    maximumAge: 0, //do not use a cached
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, options);


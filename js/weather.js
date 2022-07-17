navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
const API_KEY = "b14ad618336c9274e8418a19934af467";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector(".weather-info__temp");
            const city = document.querySelector(".weather-info__city");
            weather.innerText = data.weather[0].main;
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("I can't find you.");
}

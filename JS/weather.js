
const weatherInfo = document.querySelector("#weather_div span");

const API_KEY = "09c4f0672939f3088346de540843b7e9";

function geoSuccess(position){
    
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    fetch(url).then(resonpse => resonpse.json())
              .then(position => {
                                    const temp = position.main.temp.toPrecision(3);
                                    const weather = position.weather[0].main;
                                    const humidity = position.main.humidity;
                                    const city = position.name;
                                    weatherInfo.innerText = `${temp}℃ / ${weather} / ${humidity}% / ${city}`;
                                })
}

function geoError(){
    alert("Location information could not be verified.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);








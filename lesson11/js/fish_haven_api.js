const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=5a69da6bedb5c53762ac5a1761526a1b";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let t = jsObject.main.temp;
    let s = jsObject.wind.speed;
    let windchill = 35.74 + (0.6215 * t) - (35.75 *(s ** 0.16)) + (0.4275 * t * (s ** 0.16));
    
    document.getElementById('current_weather').textContent = jsObject.weather[0].description;
    document.getElementById('current_temp').textContent = `${t} °F`;
    document.getElementById('humidity').textContent = `${jsObject.main.humidity}%`;
    document.getElementById('wind_speed').textContent = `${s} mph`;
    if (t <= 50 && s > 3) {
        document.querySelector('#wind_chill').textContent = `${Math.round(windchill)} °F`;
    }
    
    else {
        windchill = 'N/A';
        document.querySelector('#wind_chill').textContent = 'N/A';
    }
    
  });

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=5a69da6bedb5c53762ac5a1761526a1b";
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
  const forecastfive = jsObject.list.filter(item => item.dt_txt.includes('18:00:00'));
  const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  
  forecastfive.forEach((forecast, index) => {
    const forcast_day = forecast.dt_txt;
    let day = new Date(forcast_day).getDay()
    const imagesrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
    index += 1;

    document.querySelector(`.col-head${index}`).textContent = weekdays[day];
    document.querySelector(`.weather_data${index}`).textContent = `${forecast.main.temp.toFixed(1)}°F`; 
    document.querySelector(`.weather_icon${index}`).setAttribute('src', imagesrc);
    document.querySelector(`.weather_icon${index}`).setAttribute('alt', forecast.weather[0].description); 
    });
});
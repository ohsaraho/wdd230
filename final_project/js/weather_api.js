const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.7608&lon=-111.8910&exclude=minutely,hourly&appid=5a69da6bedb5c53762ac5a1761526a1b&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    document.getElementById('current_weather').textContent = jsObject.current.weather[0].main;
    document.getElementById('current_temp').textContent = `${jsObject.current.temp} °F`;
    document.getElementById('humidity').textContent = `${jsObject.current.humidity}%`;

  // dtTimes = jsObject.daily.dt * 1000

  
    
    // let day = 1
    jsObject.daily.forEach((day, index) => {
      const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

      const forcast_day = day.dt*1000;
      let date = new Date(forcast_day).getDay() + 1
      const imagesrc = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
      index += 1;
      
      document.querySelector(`.col-head${index}`).textContent = weekdays[date];
      document.querySelector(`.weather_data${index}`).textContent = `${day.temp.day.toFixed(1)}°F`; 
      document.querySelector(`.weather_icon${index}`).setAttribute('src', imagesrc);
      document.querySelector(`.weather_icon${index}`).setAttribute('alt', day.weather[0].description); 
    
  })  

  
  });


// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     jsObject.daily.forEach((day, index) => {
//       const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

      
//       const forcast_day = day.dt*1000;
//       let date = new Date(forcast_day).getDay()
//       const imagesrc = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
//       index += 1;

//       document.querySelector(`.col-head${index}`).textContent = weekdays[date];
//       document.querySelector(`.weather_data${index}`).textContent = `${day.temp.day.toFixed(1)}°F`; 
//       document.querySelector(`.weather_icon${index}`).setAttribute('src', imagesrc);
//       document.querySelector(`.weather_icon${index}`).setAttribute('alt', day.weather[0].description); 
//     });
// });


  
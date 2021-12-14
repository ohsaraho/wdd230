const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.7608&lon=-111.8910&exclude=minutely,hourly&appid=5a69da6bedb5c53762ac5a1761526a1b&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    document.querySelector('#current_weather').textContent = jsObject.current.weather[0].main;
    document.querySelector('#current_temp').textContent = `${jsObject.current.temp} °F`;
    document.querySelector('#humidity').textContent = `${jsObject.current.humidity}%`;


    if(jsObject.alerts != null) {
      let cityh1 = document.createElement('h1');
      cityh1.textContent = 'Weather Alerts for the Salt Lake City Area';
      document.querySelector('div.weatherAlerts').appendChild(cityh1);

      jsObject.alerts.forEach((alert) => {
        let divWeather = document.createElement('div');
        let event = document.createElement('h2');
        let ulWeathther = document.createElement('ul');
        let description = document.createElement('li');

        event.textContent = alert.event;
        description.textContent = alert.description;

        divWeather.appendChild(event);
        divWeather.appendChild(ulWeathther);
        ulWeathther.appendChild(description);
      
        document.querySelector('div.weatherAlerts').appendChild(divWeather);
        document.querySelector(".weatherAlerts").style.display = "block";
      }
      

    )}else {
      let cityh1 = document.createElement('h1');
      cityh1.textContent = 'Weather Alerts for the Salt Lake City Area';
      document.querySelector('div.weatherAlerts').appendChild(cityh1);

      let event = document.createElement('h2');
      event.textContent = 'No current weather alerts';
      document.querySelector('div.weatherAlerts').appendChild(event);

      document.querySelector(".weatherAlerts").style.display = "block";
    };


  // This code for weather alerts only displays the first weather alert in the array and belongs to the h1, h2 and p within the weatherAlerts div. I wasn't for sure if it just needed to be one or as many as there are or if they only provide one severe weather alert, so I am keeping it in within a comment   
  //   if (jsObject.alerts != null) {
  //     document.querySelector(".weatherAlerts").style.display = 'block';
  //    document.querySelector('.weatherEvent').textContent = jsObject.alerts[0].event;
  //    document.querySelector('.eventDescription').textContent = jsObject.alerts[0].description;
  //  }else {
  //   document.querySelector(".weatherAlerts").style.display = 'block';
  //   document.querySelector('.weatherEvent').textContent = 'No current weather alerts';

  //  }

    jsObject.daily.forEach((day, index) => {
      const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

      const forcast_day = day.dt*1000;
      let date = new Date(forcast_day).getDay() + 1;
      const imagesrc = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
      index += 1;

      if (index <= 3) {
        document.querySelector(`.col-head${index}`).textContent = weekdays[date];
        document.querySelector(`.weather_data${index}`).textContent = `${day.temp.day.toFixed(1)}°F`; 
        document.querySelector(`.weather_icon${index}`).setAttribute('src', imagesrc);
        document.querySelector(`.weather_icon${index}`).setAttribute('alt', day.weather[0].description);
      }
      
       
    
  })
  
});

document.querySelector('.close').addEventListener('click', () => { 
    document.querySelector(".weatherAlerts").style.display = "none"; 
}, false);


  
const alertMessage = document.querySelector(".weatherAlerts");

const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.7608&lon=-111.8910&exclude=minutely,hourly&appid=5a69da6bedb5c53762ac5a1761526a1b&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    document.getElementById('current_weather').textContent = jsObject.current.weather[0].main;
    document.getElementById('current_temp').textContent = `${jsObject.current.temp} °F`;
    document.getElementById('humidity').textContent = `${jsObject.current.humidity}%`;


    // const alerts = jsObject['alerts'];

    if (jsObject.alerts != null) {
      document.querySelector(".weatherAlerts").style.display = 'block'
     document.querySelector('.weatherEvent').textContent = jsObject.alerts[0].event;
     document.querySelector('.eventDescription').textContent = jsObject.alerts[0].description;
   }else {
    document.querySelector(".weatherAlerts").style.display = 'block'
    document.querySelector('.weatherEvent').textContent = 'No current weather alerts' 

   }

  // dtTimes = jsObject.daily.dt * 1000

  
    
    // let day = 1
    jsObject.daily.forEach((day, index) => {
      const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

      const forcast_day = day.dt*1000;
      let date = new Date(forcast_day).getDay() + 1
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


// if(jsObject.alerts != 'undefined' || jsObject.alerts != null) {
      //   let cityh2 = document.createElement('h2');
      //   h2.textContent = 'Weather Alerts for the Salt Lake City Area';
      //   document.querySelector('div.weatherAlerts').appendChild(cityh2);

      //   jsObject.alerts.forEach((alert) => {
      //     let weathAlert = document.createElement('ul');
      //     let event = document.createElement('li');
      //     let description = document.createElement('li');

      //     event.textContent = alert.event;
      //     description.textContent = alert.description;

      //     weathAlert.appendChild(event);
      //     weathAlert.appendChild(description);

      //     weathAlert.setAttribute('class', 'alert');
        
      //     document.querySelector('div.weatherAlerts').appendChild(weathAlert);
      //     document.querySelector(".weatherAlerts").style.display = "block";
      //   }
        

      // )}else {
      //   let cityh2 = document.createElement('h2');
      //   h2.textContent = 'Weather Alerts for the Salt Lake City Area';
      //   document.querySelector('div.weatherAlerts').appendChild(cityh2);
      //   let alert = document.createElement('ul');
      //   let event = document.createElement('li');
        
      //   event.textContent = 'No current weather alerts';
      //   alert.appendChild(event);
      //   document.querySelector('div.weatherAlertS').appendChild(alert);

      //   document.querySelector(".weatherAlerts").style.display = "block";
      // };


  
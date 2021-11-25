const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    towns.forEach(town => { 
        if (town.name == 'Soda Springs'){
          let upcoming_event = document.createElement('section');
          let h2 = document.createElement('h2');
          let ul = document.createElement('ul');
          const events = town.events;

          events.forEach(event => {
              let li = document.createElement('li');
              li.textContent = event;
              ul.appendChild(li);
            
          });
          
          h2.textContent = `${town.name} Upcoming Events`;

          upcoming_event.appendChild(h2);
          upcoming_event.appendChild(ul);
          


          document.querySelector('div.upcoming_events').appendChild(upcoming_event);
        }

    
  });
});
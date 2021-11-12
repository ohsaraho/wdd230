const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    towns.forEach(town => { 
        if (town.name == 'Fish Haven' || town.name == 'Preston' || town.name == 'Soda Springs'){
          let card = document.createElement('section');
          let div = document.createElement('div');
          let h2 = document.createElement('h2');
          let h3 = document.createElement('h3');
          let p1 = document.createElement('p');
          let p2 = document.createElement('p');
          let p3 = document.createElement('p');
          let image = document.createElement('img');
          
          div.setAttribute('class', 'town_data');
          image.setAttribute('src', `images/home/${town.photo}`);
          image.setAttribute('alt', town.name);
          h2.textContent = town.name;
          // h2.setAttribute('class', 'townName');
          h3.textContent = town.motto;
          // h3.setAttribute('class', 'townMoto');
          p1.textContent = `Year Founded: ${town.yearFounded}`;
          p2.textContent = `Population: ${town.currentPopulation}`;
          p3.textContent = `Annual Rain: ${town.averageRainfall}`;

          card.appendChild(image);
          card.appendChild(div);
          div.appendChild(h2);
          div.appendChild(h3);
          div.appendChild(p1);
          div.appendChild(p2);
          div.appendChild(p3);
          


          document.querySelector('div.cards').appendChild(card);
        }

    
  });
});

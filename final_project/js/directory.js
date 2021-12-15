const businessjson = 'data/businessOrganizations.json';

const gridButton = document.querySelector('.gridView');
const listButton = document.querySelector('.listView');
const displayView = document.querySelector('.displayGrid');


fetch(businessjson)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    businesses.forEach(business => { 
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let pPhone = document.createElement('p');
        let pAddress = document.createElement('p');
        let pCityZip = document.createElement('p');
        let aURL = document.createElement('a');
        let pDescript = document.createElement('p');
        


    h2.textContent = business.businessName;
    image.setAttribute('src', `images/directory/${business.logo}`);
    image.setAttribute('alt', business.businessName);
    pPhone.textContent = business.phoneNumber;
    pAddress.textContent = business.address;
    pCityZip.textContent = `${business.city}, ${business.state} ${business.zipCode}`;
    aURL.textContent = business.businessName;
    aURL.setAttribute('href', `${business.websiteURL}`);
    pDescript.textContent = business.description;
    


    card.appendChild(h2);
    card.appendChild(image);
    card.appendChild(pDescript);
    card.appendChild(pAddress);
    card.appendChild(pCityZip);
    card.appendChild(pPhone);
    card.appendChild(aURL);
    


    document.querySelector('div.cards').appendChild(card);
    
  });
});

document.querySelector('.gridView').addEventListener('click', () => { 
  // document.querySelector(".listView").style.display = "none"; 
  document.querySelector(".displayGrid").style.display = "block"; 
}, false);

document.querySelector('.listView').addEventListener('click', () => { 
  // document.querySelector(".listView").style.display = "none";
  document.querySelector(".displayGrid").style.display = "none";  
  document.querySelector(".displayView").style.display = "block"; 
}, false);
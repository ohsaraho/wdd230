let date = new Date();

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

document.getElementById("datefooter").textContent = date.toLocaleDateString("en-UK", options);


const bannerMessage = document.querySelector(".banner");


if (date.getDay() === 5) {
    bannerMessage.style.display = 'block';
    
} 
else {
    bannerMessage.style.display = 'none';
}


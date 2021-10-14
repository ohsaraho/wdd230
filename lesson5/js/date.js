let date = new Date();

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

document.getElementById("datefooter").textContent = date.toLocaleDateString("en-UK", options);



let dayOfWeek;

dayOfWeek = date.getDay();

const bannerMessage = document.getElementById("bannerDayOfWeek");


if (dayOfWeek === 5) {
    bannerMessage.style.display = 'block';
    
} 
else {
    bannerMessage.style.display = 'none';
}


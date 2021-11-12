let date = new Date();

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

document.getElementById("datefooter").textContent = date.toLocaleDateString("en-UK", options);
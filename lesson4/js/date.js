// document.getElementById("copyrightyear").textContent = new Date().getFullYear();

// document.getElementById("lastupdated").innerHTML = document.lastModified


// const m_names = ["January", "February", "March", 
// "April", "May", "June", "July", "August", "September", 
// "October", "November", "December"];

// const d_names = ["Sunday","Monday", "Tuesday", "Wednesday", 
// "Thursday", "Friday", "Saturday"];

// var myDate = new Date();
// // myDate.setDate(myDate.getDate());
// const curr_date = myDate.getDate();
// const curr_month = myDate.getMonth();
// const curr_day  = myDate.getDay();
// const curr_year = myDate.getFullYear();
// myDate = d_names[curr_day] + "," + " " + curr_date + " " + m_names[curr_month] + " " + curr_year;
// document.getElementById("lastupdated").innerHTML = myDate;

let date = new Date();

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}

document.getElementById("datefooter").textContent = date.toLocaleDateString("en-UK", options);

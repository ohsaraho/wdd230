let now = Date.now();

let lastVisited = window.localStorage.getItem('lastVisit');

if (lastVisited != 'undefined' && lastVisited != null) {
    
    const oneDay = 24 * 60 * 60 * 1000;

    const numberOfDays = Math.floor((now - lastVisited) / oneDay);

    if (numberOfDays === 0 || numberOfDays >= 2) {
        document.querySelector('.last_visit_day').textContent = `Last visited: ${numberOfDays} days ago`;
    }
    else if (numberOfDays === 1) {
        document.querySelector('.last_visit_day').textContent = `Last visit: ${numberOfDays} day ago`;
    }
}
else {
    document.querySelector('.last_visit_day').textContent = `Last visited: never`;
}

window.localStorage.setItem('lastVisit', now);
localStorage.clear()
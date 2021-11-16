let t = parseFloat(document.querySelector('#current_temp').textContent);
let s = parseFloat(document.querySelector('#wind_speed').textContent);

if (t <= 50 && s > 3) {
    f = 35.74 + (0.6215 * t) - (35.75 *(s ** 0.16)) + (0.4275 * t * (s ** 0.16));
}

else {
    f = 'N/A';
}

document.querySelector('#wind_chill').textContent = Math.round(f);
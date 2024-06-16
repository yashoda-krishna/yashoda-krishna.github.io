const getNow = () => {
    const now = new Date();
    let date = now.getDate();
    if (date < 10) {
        date = `0${date}`;
    }
    let month = now.getMonth();
    if (month < 10) {
        month = `0${month}`;
    }
    let year = now.getFullYear();
    let hours = now.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let seconds = now.getSeconds();
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${date}-${month}-${year}   ${hours}:${minutes}:${seconds}`;
}

const randomColor = () => {
    let rcolor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    return rcolor;
}

let i = 0.000,
    j = 1.000;
const randomColoralpha = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let thresh = 50;
    let inc = 75;
    if (r < thresh) {
        r += inc;
    }
    if (g < thresh) {
        g += inc;
    }
    if (b < thresh) {
        b += inc;
    }
    let rcolor = `rgb(${r},${g},${b}`
        // i = 0.000, j = 1.000;
    return rcolor;
}
const h = document.querySelector(`html`);
h.style.backgroundImage = `linear-gradient(to right, ${randomColor()},${randomColor()})`;
document.querySelector(`style`).innerHTML = `
.center {
    text-align:center;
    
}

.body{
    background-color : ${randomColor()}

}

.mt{
    padding-top:42vh;
}
`;

const r = document.querySelector('.root');
r.style.color = 'white';

r.innerHTML = `<div>
<h1>Ritvik's Dynamic Website Using JS</h1>
</div>
<div class='current center'>
<h2></h2></div>`;

document.querySelector(".root>div").classList.add("center", "mt");

setInterval(() => {
    document.querySelector(".current>h2").textContent = getNow();
}, 1000)

left = `${randomColoralpha()}`;
right = `${randomColoralpha()}`;

flag = true;
setInterval(() => {
    left = `${randomColoralpha()}`;
    right = `${randomColoralpha()}`;
    i = 0.3;
    j = 1.0;
    flag = !flag;
}, 1000);

setInterval(() => {
    if (flag) { h.style.backgroundImage = `linear-gradient(to right , ${left},${i}),${right},${j}))`; } else {
        h.style.backgroundImage = `linear-gradient(to left, ${left},${i}),${right},${j}))`;
    }

    i += 0.007;
    if (j > 0.45) { j -= 0.001; }

}, 1);

const green = document.getElementById('greenBtn');
const blue = document.getElementById('blueBtn');
const red = document.getElementById('redBtn');

const body = document.getElementById('body');
green.addEventListener('click', () => {
    body.style.backgroundColor = "green";
});

red.addEventListener('click', () => {
    body.style.backgroundColor = "red";
});

blue.addEventListener('click', () => {
    body.style.backgroundColor = "blue";
});
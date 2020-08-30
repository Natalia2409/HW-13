const btn = document.getElementById('btn');
const place = document.getElementById('place');
const place1 = document.getElementById('place1');
const up = document.getElementById('up');
const down = document.getElementById('down');
let fontSize;
let value;

function* createIdGenerator() {
    for (let i = 1; i < Infinity; i++) {
        yield i;
    }
}
const idGenerator = createIdGenerator();


function* newFontGenerator() {
    fontSize = 14;
    if(value === 'up') {
        yield fontSize += 2;
    } else {
        yield fontSize -= 2;
    }
}
const fontGenerator = newFontGenerator();


btn.addEventListener('click', () => {
    place.style.display = 'block';
    place.innerHTML = idGenerator.next().value;
});

up.addEventListener('click', () => {
    value = 'up';
    console.log(value);
    console.log(fontSize);
    place1.style.fontSize = `${fontGenerator.next().value}px`;
});






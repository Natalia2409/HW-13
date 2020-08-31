const btn = document.getElementById('btn');
const place = document.getElementById('place');
const up = document.getElementById('up');
const down = document.getElementById('down');
const place1 = document.getElementById('place1');
let fontSize = 14;
let plus;

function* createIdGenerator() {
    for (let i = 1; i < Infinity; i++) {
        yield i;
    }
}
const idGenerator = createIdGenerator();


function* funcUp() {
    while (plus === true) {
        yield (fontSize += 2);
    } 
}
const fontUp = funcUp();

function* funcDown() {
    while (plus === false) {
        yield (fontSize -= 2);
    } 
}
const fontDown = funcDown();



btn.addEventListener('click', () => {
    place.style.display = 'block';
    place.innerHTML = idGenerator.next().value;
});

up.addEventListener('click', () => {
    plus = true;
    place1.style.fontSize = `${fontUp.next().value}px`;
});

down.addEventListener('click', () => {
    plus = false;
    place1.style.fontSize = `${fontDown.next().value}px`;
});




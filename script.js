const circle = document.getElementById('circle');
const line = document.getElementById('line');
const gray = document.getElementById('gray');
const width_image = 600;

let mousedown = false;
let width_percent = 50;
let mouse_position;

function change() {
    gray.style.width = width_percent + "%";
    circle.style.left = width_percent - 2.2 + "%";
    line.style.left = width_percent - 0.2 + "%"
}

circle.addEventListener("mousedown", ()=> {
    mousedown = true;
    console.log('tekan');
})

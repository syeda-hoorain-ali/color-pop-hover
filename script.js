const container = document.querySelector('.container');
const music = new Audio('./music.mp3');
let count = 377;


for (let i = 0; i < count; i++) {
    let box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
}


const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    let duration = Math.random() * 3;
    let changeColor = Math.random() * 360;
    box.addEventListener('mouseover', () => {
        box.classList.add('active');
        box.style.animationDuration = `${1 + duration}s`;
        box.style.filter = `hue-rotate(${changeColor}deg)`;
        // console.log('active');
        music.play();
        // console.log(music);
        setTimeout(() => {
            music.pause();
        }, 1000)
    })
})
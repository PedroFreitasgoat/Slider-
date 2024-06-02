let items = document.querySelectorAll('.slider .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;

nextBtn.onclick = () => {
    active++;
    if (active > lastPosition) {
        active = firstPosition;
    }
    setSlider();
}

prevBtn.onclick = () => {
    active--;
    if (active < firstPosition) {
        active = lastPosition;
    }
    setSlider();
}

const setSlider = () => {
    let oldActive = document.querySelector('.slider .item.active');
    if (oldActive) oldActive.classList.remove('active');  // Remover a classe 'active' sem o ponto
    items[active].classList.add('active');
}

const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter + 'px');
}

setDiameter();
window.addEventListener('resize', setDiameter);

const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const time = document.querySelector('.time');
let idInterval;

let active = false;
let stoper = 0;

const btnChange = () => {
    if (!active) {
        btnStart.textContent = 'Pauza';
        active = true;

        idInterval = setInterval(startTimer, 10);
    } else {
        btnStart.textContent = 'Start';
        active = false;
        clearInterval(idInterval);
    }
}

const reset = () => {
    time.textContent = '---';
    btnStart.textContent = 'Start';
    active = false;
    clearInterval(idInterval);
}

const startTimer = () => {
    stoper++;
    time.textContent = (stoper / 100).toFixed(2);
}

btnStart.addEventListener('click', btnChange);
btnReset.addEventListener('click', reset)
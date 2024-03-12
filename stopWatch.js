const time = document.querySelector('.time');
const studyBtn = document.querySelector('.time-study-btn');

let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

const stopWatch = () => {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    time.innerHTML = h + ":" + m + ":" + s;
}

studyBtn.addEventListener('click', () => {
    if (time !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
})
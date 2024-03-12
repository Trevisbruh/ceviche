const cals = document.querySelectorAll('.cal-btn');
const calInput = document.querySelector('.cal-input');
const calAnswer = document.querySelector('.cal-answer');

cals.forEach(cal => {
    cal.textContent = cal.value;

    cal.addEventListener('click', () => {
        calInput.focus();
        if (cal.value !== '=') {
            calInput.value += cal.value;
        }
    })
})

calAnswer.addEventListener('click', () => {
    console.log('value')
    let some = calInput.value;
    calInput.value = eval(some);
})


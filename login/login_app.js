const loginBtn = document.querySelector('.login-submit-btn');
const loginUsername = document.querySelector('.login-input-username');
const loginPassword = document.querySelector('.login-input-password');

let users = [
    {'username': 'trev', 'password': 'fuckerpl'},
    {'username': 'bruh', 'password': 'fucker'},
];

loginBtn.addEventListener('click', () => {

    username = loginUsername.value;
    password = loginPassword.value;

    let userExist = users.findIndex(user => user.username === username && user.password === password);
    if (userExist === -1) {
        alert("That's wrong bitch -_-");
        return;
    } else {
        window.location.href = '/index.html';
        localStorage.setItem('login', true);
    }
})
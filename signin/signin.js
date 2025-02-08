function validateSignIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (email === 'mab105120@utd.edu' && password === '1234') {
        message.textContent = 'Sign in success';
        message.style.color = 'green';
    } else {
        message.textContent = 'Username or password is incorrect';
        message.style.color = 'red';
    }
}

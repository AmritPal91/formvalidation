function validate() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    console.log(username);
    checkUsername(username);
    checkEmail(email);
    checkPassword(password);
    checkCPassword(password, cpassword);

}
function checkUsername(username) {
    if (username.length > 7) {
        document.getElementById("username").classList.add('success');
        document.getElementById("username").classList.replace('error', 'success');
        document.getElementById("username_error").innerText = ' ';

    } else {
        document.getElementById("username").classList.add('error');
        document.getElementById("username_error").innerText = 'Username must be 7 digits long';
    }
}
function checkEmail(email) {
    if (email.length > 7 && email.includes('@')) {
        document.getElementById("email").classList.add('success');
        document.getElementById("email").classList.replace('error', 'success');
        document.getElementById("email_error").innerText = ' ';

    }
    else {
        document.getElementById("email").classList.add('error');
        document.getElementById("email_error").innerText = 'Email must include @ and . symbol.';
    }
}
function checkPassword(password) {
    if (password.length > 6 && password != ' ') {
        document.getElementById("password").classList.add('success');
        document.getElementById("password").classList.replace('error', 'success');
        document.getElementById("password_error").innerText = ' ';
    } else {
        document.getElementById("password").classList.add('error');
        document.getElementById("password_error").innerText = 'Password must be 6 digits long';
    }
}
function checkCPassword(password, cpassword) {
    if (password == cpassword && password != '') {
        document.getElementById("cpassword").classList.add('success');
        document.getElementById("cpassword").classList.replace('error', 'success');
        document.getElementById("cpassword_error").innerText = ' ';
    } else {
        document.getElementById("cpassword").classList.add('error');
        document.getElementById("cpassword_error").innerText = 'Password does not match';
    }
}
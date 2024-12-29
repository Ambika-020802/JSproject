document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    let user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Sign Up Successful!');
    window.location.href = 'login.html'; 
});

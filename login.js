document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert('Login Successful!');
               window.location.href = 'welcome.html';
    } else {
        alert('Invalid username or password!');
    }
});

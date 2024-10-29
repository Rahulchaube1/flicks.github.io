document.getElementById('loginButton').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    if (firstName && lastName && email && number) {
        alert('Login successful! Redirecting to Home Page...');
        window.location.href = 'home.html';
    } else {
        alert('Please fill all fields!');
    }
});

// Toggle dark/light mode
const toggleButton = document.getElementById('toggleMode');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

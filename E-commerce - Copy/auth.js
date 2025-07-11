// Toggle between Login and Signup Forms
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    if (loginForm.style.display === 'none') {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
    } else {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
    }
  }
  
  // Validation for login and signup
  document.getElementById('login-form').addEventListener('submit', function (e) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === '' || password === '') {
      alert('Please fill in all fields');
      e.preventDefault();
    } else {
      alert('Login successful!');
      // Redirect or perform further logic
    }
  });
  
  document.getElementById('signup-form').addEventListener('submit', function (e) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      e.preventDefault();
    } else if (username === '' || email === '' || password === '') {
      alert('Please fill in all fields');
      e.preventDefault();
    } else {
      alert('Signup successful!');
      // Redirect or perform further logic
    }
  });
  
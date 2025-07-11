// Signup Form Validation
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Validate name
    if (name.trim() === "") {
      alert("Please enter your full name.");
      return false;
    }
  
    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Validate password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
  
    // Validate password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    // If everything is valid, simulate signup success
    alert("Signup successful!");
    return true;
  }
  
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var firstName = document.getElementById('firstName').value.trim();
  var lastName = document.getElementById('lastName').value.trim();

  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var gender = document.querySelector('input[name="gender"]:checked');

  var language = document.getElementById('language').value;
  var message = document.getElementById('message');

  if (!firstName || !lastName || !email || !password || !confirmPassword || !gender || !language) {
    message.textContent = "fields.";
    return;
  }
  if (password !== confirmPassword) {
    message.textContent = "Passwords  not match.";
    return;
  }
  message.style.color = "green";
  message.textContent = "Registration successful!";
  
});

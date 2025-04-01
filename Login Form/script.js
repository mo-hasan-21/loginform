// Get the form and input elements
const form = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"][placeholder="Username"]');
const passwordInput = document.querySelector('input[type="text"][placeholder="Password"]');

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting by default

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate input fields
    if (username === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        // Simulate successful login (for demonstration purposes)
        alert('Login successful!');
        // You can replace this with actual login logic, like sending a request to a server
    }
});

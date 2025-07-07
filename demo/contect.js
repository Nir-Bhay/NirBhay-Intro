// Form Validation Script
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    // Name Validation
    const nameField = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (nameField.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Email Validation
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // If form is valid, you can submit the form or display a success message here
    if (isValid) {
        alert('Your message has been sent successfully!');
        document.getElementById('contactForm').reset();
    }
});

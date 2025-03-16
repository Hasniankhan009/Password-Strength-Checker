const passwordInput = document.getElementById('password');
const strengthIndicator = document.getElementById('strength-bar');
const strengthFeedback = document.getElementById('strength-feedback');
const lengthRequirement = document.getElementById('length-requirement');
const numberRequirement = document.getElementById('number-requirement');
const specialCharRequirement = document.getElementById('special-char-requirement');
const togglePasswordButton = document.getElementById('toggle-password');

// Check password strength function
const checkPasswordStrength = (password) => {
    let strength = 0;
    const lengthValid = password.length >= 6;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

    // Increment strength based on criteria
    if (lengthValid) strength++;
    if (hasNumber) strength++;
    if (hasSpecialChar) strength++;

    // Update strength indicator and feedback
    if (strength === 0) {
        strengthIndicator.style.width = '0%';
        strengthFeedback.textContent = 'Weak';
        strengthIndicator.style.backgroundColor = 'red';
    } else if (strength === 1) {
        strengthIndicator.style.width = '33%';
        strengthFeedback.textContent = 'Medium';
        strengthIndicator.style.backgroundColor = 'yellow';
    } else if (strength === 2 || strength === 3) {
        strengthIndicator.style.width = '66%';
        strengthFeedback.textContent = 'Strong';
        strengthIndicator.style.backgroundColor = 'green';
    }

    // Update password requirements feedback
    lengthRequirement.classList.toggle('valid', lengthValid);
    lengthRequirement.classList.toggle('invalid', !lengthValid);
    numberRequirement.classList.toggle('valid', hasNumber);
    numberRequirement.classList.toggle('invalid', !hasNumber);
    specialCharRequirement.classList.toggle('valid', hasSpecialChar);
    specialCharRequirement.classList.toggle('invalid', !hasSpecialChar);
};

// Event listener for password input
passwordInput.addEventListener('input', (e) => {
    checkPasswordStrength(e.target.value);
});

// Toggle password visibility
togglePasswordButton.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
});

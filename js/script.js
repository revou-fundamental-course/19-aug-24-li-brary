document.addEventListener('DOMContentLoaded', function() {
    // Welcoming message with user's name
    const userName = prompt("Please enter your name:", "Guest");
    document.getElementById('userName').textContent = userName;

    // Form validation and submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous errors
        clearErrors();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const dob = document.getElementById('dob').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById('message').value.trim();

        let valid = true;

        // Validate name
        if (name === '') {
            displayError('nameError', 'Name is required.');
            valid = false;
        }

        // Validate date of birth
        if (dob === '') {
            displayError('dobError', 'Date of Birth is required.');
            valid = false;
        }

        // Validate gender
        if (!gender) {
            displayError('genderError', 'Gender is required.');
            valid = false;
        }

        // Validate message
        if (message === '') {
            displayError('messageError', 'Message is required.');
            valid = false;
        }

        // Show form values if valid
        if (valid) {
            document.getElementById('formResult').innerHTML = `
                <h3>Form Submitted</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
                <p><strong>Gender:</strong> ${gender.value}</p>
                <p><strong>Message:</strong> ${message}</p>
            `;
        }
    });

    function displayError(elementId, message) {
        document.getElementById(elementId).innerText = message;
    }

    function clearErrors() {
        document.getElementById('nameError').innerText = '';
        document.getElementById('dobError').innerText = '';
        document.getElementById('genderError').innerText = '';
        document.getElementById('messageError').innerText = '';
    }
});

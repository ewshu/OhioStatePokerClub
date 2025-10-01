// Contact form functionality
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

function handleFormSubmit(e) {
    // Get form data
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    
    // Basic validation
    if (!validateForm(formObject)) {
        e.preventDefault();
        return;
    }
    
    // Show loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Opening Email...';
    submitButton.disabled = true;
    
    // Let the form submit naturally to mailto
    // The form will open the user's email client
    setTimeout(() => {
        showSuccessMessage();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1000);
}

function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.subject || data.subject.trim().length < 5) {
        errors.push('Subject must be at least 5 characters long');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    if (errors.length > 0) {
        showErrorMessage(errors);
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showSuccessMessage() {
    const statusDiv = document.getElementById('form-status');
    statusDiv.textContent = 'Email client opened! Please send the email to complete your message.';
    statusDiv.className = 'success';
    
    // Clear message after 5 seconds
    setTimeout(() => {
        statusDiv.textContent = '';
        statusDiv.className = '';
    }, 5000);
}

function showErrorMessage(errors) {
    const statusDiv = document.getElementById('form-status');
    statusDiv.textContent = errors.join(', ');
    statusDiv.className = 'error';
    
    // Clear message after 8 seconds
    setTimeout(() => {
        statusDiv.textContent = '';
        statusDiv.className = '';
    }, 8000);
}

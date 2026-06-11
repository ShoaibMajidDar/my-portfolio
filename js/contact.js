/**
 * Contact Page - Form Handling and Validation
 */

// ==========================================
// FORM HANDLING
// ==========================================
const initContactForm = () => {
    const form = document.getElementById('contactForm');
    const statusDiv = document.getElementById('formStatus');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        // Validate
        const name = formData.get('name')?.trim();
        const email = formData.get('email')?.trim();
        const message = formData.get('message')?.trim();

        if (!name || !email || !message) {
            showStatus('Please fill in all required fields.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showStatus('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
      <svg class="spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="animation: spin 1s linear infinite;">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      Sending...
    `;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showStatus('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            showStatus('Oops! Something went wrong. Please try again or email me directly.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
};

// ==========================================
// UTILITIES
// ==========================================
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const showStatus = (message, type) => {
    const statusDiv = document.getElementById('formStatus');
    if (!statusDiv) return;

    statusDiv.textContent = message;
    statusDiv.className = `form-status ${type}`;

    // Auto-hide after 5 seconds
    setTimeout(() => {
        statusDiv.className = 'form-status';
    }, 5000);
};

// ==========================================
// INPUT VALIDATION (Real-time)
// ==========================================
const initInputValidation = () => {
    const emailInput = document.getElementById('email');

    emailInput?.addEventListener('blur', () => {
        const email = emailInput.value.trim();
        if (email && !isValidEmail(email)) {
            emailInput.style.borderColor = '#ef4444';
        } else {
            emailInput.style.borderColor = '';
        }
    });

    emailInput?.addEventListener('input', () => {
        emailInput.style.borderColor = '';
    });
};

// ==========================================
// INITIALIZE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    initInputValidation();
});

// Add spin animation
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

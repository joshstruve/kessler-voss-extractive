/**
 * Form Handler Module
 * Manages client-side validation, accessible error announcements, and submission confirmation modal.
 */

export function initFormHandler() {
    const form = document.getElementById('manifest-form');
    const modal = document.getElementById('submission-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    if (!form) return;

    const nameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email-address');
    const interestInput = document.getElementById('area-of-interest');

    // Real-time blur validation
    if (nameInput) nameInput.addEventListener('blur', () => validateName(nameInput));
    if (emailInput) emailInput.addEventListener('blur', () => validateEmail(emailInput));
    if (interestInput) interestInput.addEventListener('change', () => validateInterest(interestInput));

    // Form submit listener
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const isNameValid = validateName(nameInput);
        const isEmailValid = validateEmail(emailInput);
        const isInterestValid = validateInterest(interestInput);

        if (isNameValid && isEmailValid && isInterestValid) {
            // Success state - display accessible modal
            if (modal && typeof modal.showModal === 'function') {
                modal.showModal();
                if (modalCloseBtn) modalCloseBtn.focus();
            } else if (modal) {
                modal.setAttribute('open', 'true');
                if (modalCloseBtn) modalCloseBtn.focus();
            }
            form.reset();
            clearAllErrors([nameInput, emailInput, interestInput]);
        } else {
            // Focus first invalid field
            const firstInvalid = form.querySelector('[aria-invalid="true"]');
            if (firstInvalid) firstInvalid.focus();
        }
    });

    // Close modal listener
    if (modalCloseBtn && modal) {
        modalCloseBtn.addEventListener('click', () => {
            if (typeof modal.close === 'function') {
                modal.close();
            } else {
                modal.removeAttribute('open');
            }
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.focus();
        });
    }

    // Backdrop click close for dialog
    if (modal) {
        modal.addEventListener('click', (e) => {
            const rect = modal.getBoundingClientRect();
            const isInDialog = (
                rect.top <= e.clientY && e.clientY <= rect.bottom &&
                rect.left <= e.clientX && e.clientX <= rect.right
            );
            if (!isInDialog && typeof modal.close === 'function') {
                modal.close();
            }
        });
    }
}

function validateName(input) {
    if (!input) return true;
    const value = input.value.trim();
    const errorEl = document.getElementById('full-name-error');

    if (!value) {
        setError(input, errorEl, 'Full Name is required.');
        return false;
    }
    clearError(input, errorEl);
    return true;
}

function validateEmail(input) {
    if (!input) return true;
    const value = input.value.trim();
    const errorEl = document.getElementById('email-address-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
        setError(input, errorEl, 'Email Address is required.');
        return false;
    }
    if (!emailRegex.test(value)) {
        setError(input, errorEl, 'Please enter a valid email address.');
        return false;
    }
    clearError(input, errorEl);
    return true;
}

function validateInterest(input) {
    if (!input) return true;
    const value = input.value;
    const errorEl = document.getElementById('area-of-interest-error');

    if (!value || value === '') {
        setError(input, errorEl, 'Please select an area of interest.');
        return false;
    }
    clearError(input, errorEl);
    return true;
}

function setError(input, errorEl, message) {
    input.setAttribute('aria-invalid', 'true');
    input.classList.add('input-error');
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.remove('hidden');
    }
}

function clearError(input, errorEl) {
    input.setAttribute('aria-invalid', 'false');
    input.classList.remove('input-error');
    if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.add('hidden');
    }
}

function clearAllErrors(inputs) {
    inputs.forEach(input => {
        if (!input) return;
        const errorEl = document.getElementById(`${input.id}-error`);
        clearError(input, errorEl);
    });
}

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (!name || !email || !service || !message) {
                showMessage('אנא מלא את כל השדות הנדרשים.', 'error');
                return;
            }
            
            // Validate email format
            if (!isValidEmail(email)) {
                showMessage('אנא הזן כתובת דוא"ל תקנית.', 'error');
                return;
            }
            
            // Show success message
            showMessage('תודה על הודעתך! נצור קשר איתך בקרוב.', 'success');
            
            // Clear form
            contactForm.reset();
            
            // Log form data (in a real application, this would be sent to a server)
            console.log('Form submitted:', {
                name: name,
                email: email,
                phone: phone,
                service: service,
                message: message
            });
        });
    }
});

// Show success or error message
function showMessage(message, type) {
    const messageElement = document.getElementById('formMessage');
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.classList.remove('success', 'error');
        messageElement.classList.add(type);
    }
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

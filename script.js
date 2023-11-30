document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission alert
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // You can customize this alert or replace it with your own form handling logic
        alert(`Thank you, ${name}! Your message has been sent.\nEmail: ${email}\nMessage: ${message}`);
        
        // You may want to reset the form after submission
        form.reset();
    });
});

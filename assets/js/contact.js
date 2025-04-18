document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const sendMessageBtn = document.getElementById('sendMessageBtn');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Format the message
        const formattedMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

        // Send via Email
        const emailAddress = 'souvikmakur143@gmail.com';
        const subject = `New Message from ${name}`;
        const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedMessage)}`;
        window.location.href = mailtoUrl;

        // Show success message
        alert('Message sent successfully!');
        contactForm.reset();
    });
}); 
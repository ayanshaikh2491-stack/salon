// Simple interactive script for the salon website
document.addEventListener('DOMContentLoaded', () => {
  console.log('Salon website loaded');
  
  // Example: Add interactivity to service cards
  const services = document.querySelectorAll('.service');
  services.forEach(service => {
    service.addEventListener('click', () => {
      alert('Thank you for your interest! Please contact us to book this service.');
    });
  });
  
  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Simple validation
      if (!name || !email || !message) {
        showFormMessage('Please fill in all required fields', 'error');
        return;
      }
      
      // In a real implementation, you would send this data to a server
      // For now, we'll just show a success message
      showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Function to show form messages
  function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
      formMessage.textContent = message;
      formMessage.className = `form-message ${type}`;
      formMessage.style.display = 'block';
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);
    }
  }
  
  // Add current year to footer
  const yearEl = document.querySelector('footer p');
  if (yearEl) {
    const currentYear = new Date().getFullYear();
    yearEl.innerHTML = yearEl.innerHTML.replace('&copy; ' + new Date().getFullYear(), '&copy; ' + currentYear);
  }
});
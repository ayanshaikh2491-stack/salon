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
  
  // Add current year to footer
  const yearEl = document.querySelector('footer p');
  if (yearEl) {
    const currentYear = new Date().getFullYear();
    yearEl.innerHTML = yearEl.innerHTML.replace('&copy; ' + new Date().getFullYear(), '&copy; ' + currentYear);
  }
});
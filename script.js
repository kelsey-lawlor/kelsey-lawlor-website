/*
 * Simple JavaScript to enhance the usability of Kelsey's website.
 * Highlights the navigation link corresponding to the current page
 * and lays the groundwork for future interactive enhancements.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Automatically set the active navigation link based on the current file
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
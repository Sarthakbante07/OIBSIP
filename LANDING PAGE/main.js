document.addEventListener('DOMContentLoaded', function () {
  // Toggle navigation menu
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  menuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });

  // Smooth scrolling for anchor links
  const scrollLinks = document.querySelectorAll('.nav__links a');

  scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });

      // Close the navigation menu on mobile
      if (window.innerWidth <= 786) {
        navLinks.classList.remove('show');
      }
    });
  });

  // ScrollReveal for animations
  ScrollReveal().reveal('.section__container', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    delay: 200
  });

  ScrollReveal().reveal('.room__card', {
    duration: 1000,
    origin: 'left',
    distance: '50px',
    delay: 200,
    interval: 200
  });

  ScrollReveal().reveal('.fcontent', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    delay: 200,
    interval: 200
  });

  ScrollReveal().reveal('.img1', {
    duration: 1000,
    scale: 0.5,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 200
  });
});

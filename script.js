// Smooth scroll for "Learn More" button
document.getElementById('learnMoreBtn').addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('#about').offsetTop,
    behavior: 'smooth'
  });
});

// Contact form message
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for contacting Appglide Solutions! We’ll get back to you soon.');
  e.target.reset();
});

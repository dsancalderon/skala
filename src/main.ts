import './style.css'

// Scroll animations (Reveal elements on scroll)
function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', reveal);
// Trigger once on load
reveal();

// Navbar scroll effect
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (header) {
    if (window.scrollY > 50) {
      header.classList.remove('bg-transparent', 'border-transparent');
      header.classList.add('bg-primary/95', 'backdrop-blur-md', 'border-primary-dark', 'shadow-sm');
    } else {
      header.classList.add('bg-transparent', 'border-transparent');
      header.classList.remove('bg-primary/95', 'backdrop-blur-md', 'border-primary-dark', 'shadow-sm');
    }
  }
});

// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    // Add logic to open a mobile menu here
    alert('Menú móvil (Por implementar)');
  });
}

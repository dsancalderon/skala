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

// ==============================================
// Cookie Banner (Ley 1581/2012, SIC Conceptos 74519 y 62132/2020)
// ==============================================
function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const rejectBtn = document.getElementById('cookie-reject');

  if (!banner) return;

  const cookieConsent = localStorage.getItem('skala-cookie-consent');

  if (!cookieConsent) {
    // Show banner with a slight delay for smooth entrance
    setTimeout(() => {
      banner.classList.remove('translate-y-full');
      banner.classList.add('translate-y-0');
    }, 1500);
  }

  function hideBanner() {
    if (!banner) return;
    banner.classList.add('translate-y-full');
    banner.classList.remove('translate-y-0');
  }

  acceptBtn?.addEventListener('click', () => {
    localStorage.setItem('skala-cookie-consent', 'all');
    hideBanner();
  });

  rejectBtn?.addEventListener('click', () => {
    localStorage.setItem('skala-cookie-consent', 'essential');
    hideBanner();
  });
}

initCookieBanner();

// ==============================================
// Form consent validation (Decreto 1377/2013)
// ==============================================
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const checkbox = document.getElementById('consentimiento') as HTMLInputElement;
    if (checkbox && !checkbox.checked) {
      e.preventDefault();
      checkbox.focus();
      // Visual feedback
      const label = checkbox.closest('.flex')!;
      label.classList.add('animate-pulse');
      setTimeout(() => label.classList.remove('animate-pulse'), 2000);
    }
  });
}

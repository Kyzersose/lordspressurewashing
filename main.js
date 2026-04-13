/* =============================================
   Lord's Pressure Washing — main.js
   ============================================= */

// ── Nav scroll state ──────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Hamburger menu ────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

// Close nav when a link is clicked (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Pressure gauge animation ──────────────────
// Inject SVG gradient definition
(function injectGaugeGradient() {
  const svg = document.querySelector('.pressure-gauge');
  if (!svg) return;
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  defs.innerHTML = `
    <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#3ADFFA" />
      <stop offset="100%" stop-color="#699CFF" />
    </linearGradient>`;
  svg.prepend(defs);
})();

function animateGauge() {
  const fill = document.getElementById('heroGauge');
  if (!fill) return;
  const circumference = 2 * Math.PI * 80; // r = 80
  const target = circumference * 0.82;     // 82% full
  fill.style.strokeDashoffset = circumference - target;
}

// ── Intersection Observer — fade-up + gauge ───
const observerOptions = { threshold: 0.15 };

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Gauge fires once hero is in view
const gaugeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateGauge();
      gaugeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

const gaugeEl = document.querySelector('.pressure-gauge-wrap');
if (gaugeEl) gaugeObserver.observe(gaugeEl);

// ── Apply fade-up to key elements on load ─────
function applyFadeUp() {
  const targets = [
    '.hero-eyebrow', '.hero-headline', '.hero-body',
    '.hero-actions', '.hero-stats',
    '.section-header',
    '.service-card',
    '.pillar',
    '.process-step',
    '.contact-text', '.contact-form-wrap',
  ];

  targets.forEach((selector, groupIndex) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('fade-up');
      el.style.transitionDelay = `${i * 80}ms`;
      fadeObserver.observe(el);
    });
  });
}

// Run after DOM is fully parsed
document.addEventListener('DOMContentLoaded', () => {
  applyFadeUp();

  // Hero gauge fires immediately since hero is visible on load
  setTimeout(animateGauge, 600);
});

// ── Contact form ──────────────────────────────
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic front-end validation
    const required = contactForm.querySelectorAll('[required]');
    let valid = true;

    required.forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = 'var(--error)';
        valid = false;
      }
    });

    if (!valid) return;

    // Simulate submission (replace with real fetch in production)
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    setTimeout(() => {
      contactForm.querySelectorAll('input, select, textarea').forEach(f => f.value = '');
      contactForm.querySelector('select').selectedIndex = 0;
      submitBtn.style.display = 'none';
      formSuccess.classList.add('visible');

      // Reset after 6 seconds
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Request';
        submitBtn.style.display = '';
        formSuccess.classList.remove('visible');
      }, 6000);
    }, 800);
  });
}

// ── Smooth active nav highlighting ────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}`
          ? 'var(--on-surface)'
          : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

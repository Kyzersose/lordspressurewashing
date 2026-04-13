/* =============================================
   Lord's Pressure Washing — main.js
   ============================================= */

// ── Nav: deepen glass on scroll ───────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 40;
  navbar.style.background = scrolled
    ? 'rgba(8, 14, 29, 0.92)'
    : 'rgba(8, 14, 29, 0.60)';
}, { passive: true });

// ── Scroll reveal ─────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
});

document.querySelectorAll('.reveal-item').forEach(el => revealObserver.observe(el));

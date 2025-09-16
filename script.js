
// Плавная прокрутка для якорных ссылок
(function() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || href.length === 1) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const menu = document.getElementById('primary-menu');
        if (menu && menu.classList.contains('open')) {
          menu.classList.remove('open');
          const toggle = document.querySelector('.nav-toggle');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
})();

// Переключатель мобильной навигации
(function() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('primary-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
})();

// Простая анимация отображения пересечений
(function() {
  const revealables = document.querySelectorAll('.section, .card, .testimonial');
  const onIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.animate([
          { opacity: 0, transform: 'translateY(12px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 500, easing: 'ease-out' });
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersect, { rootMargin: '0px 0px -10% 0px' });
  revealables.forEach(el => observer.observe(el));
})(); 

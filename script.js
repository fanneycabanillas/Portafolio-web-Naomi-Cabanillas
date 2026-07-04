// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Cierra el menú al elegir un link (útil en móvil)
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

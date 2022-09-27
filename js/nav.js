export default () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navItemLinks = document.querySelectorAll('.nav-item');
  const hamburgerBars = document.querySelectorAll('.hamburger__bar');

  function toggleNavLinks() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');

    changeHamburgerColor();
  }

  function changeHamburgerColor() {
    if (navLinks.classList.contains('active')) {
      hamburgerBars.forEach((hamburgerBar) => {
        hamburgerBar.style.backgroundColor = 'var(--bg-clr-primary)';
      });
    }
  }

  function closeNavLinks() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }

  navItemLinks.forEach((navItemLink) =>
    navItemLink.addEventListener('click', () => {
      closeNavLinks();
    })
  );

  window.addEventListener('resize', closeNavLinks);
  hamburger.addEventListener('click', toggleNavLinks);
};

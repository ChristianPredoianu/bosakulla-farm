export default () => {
  const hamburger = document.getElementById('hamburger'),
    navLinks = document.getElementById('nav-links'),
    navItemLinks = document.querySelectorAll('.nav-item'),
    hamburgerBars = document.querySelectorAll('.hamburger__bar');

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
    } else {
      hamburgerBars.forEach((hamburgerBar) => {
        hamburgerBar.style.backgroundColor = 'var(--clr-light-white)';
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
      changeHamburgerColor();
      console.log(
        document.title,
        window.location.pathname + window.location.search
      );
    })
  );

  window.addEventListener('resize', closeNavLinks);
  hamburger.addEventListener('click', toggleNavLinks);
};

removeHash();

function removeHash() {
  history.replaceState(null, null, ' ');
}

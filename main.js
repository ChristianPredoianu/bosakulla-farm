const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItemLinks = document.querySelectorAll('.nav-item');

function toggleNavLinks() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
}

function closeNavLinks() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
}

navItemLinks.forEach((navItemLink) =>
  navItemLink.addEventListener('click', function () {
    closeNavLinks();
    navItemLinks.forEach((navItemLink) =>
      navItemLink.classList.remove('active-link')
    );
    this.classList.add('active-link');
  })
);

window.addEventListener('resize', closeNavLinks);
hamburger.addEventListener('click', toggleNavLinks);

//Swiper

const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

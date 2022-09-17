const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItemLinks = document.querySelectorAll('.nav-item');
const paginationBullets = document.querySelectorAll('.pagination__bullet');
const sections = document.querySelectorAll('section');

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

//Pagination bullets
paginationBullets.forEach((paginationBullet) => {
  paginationBullet.addEventListener('click', function () {
    paginationBullets.forEach((paginationBullet) => {
      paginationBullet.classList.remove('active-bullet');
    });
    this.classList.add('active-bullet');
  });
});

window.addEventListener('scroll', (e) => {
  const sections = document.querySelectorAll('section');
  let currentSection;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 300) {
      currentSection = section.id;
    }
  });

  paginationBullets.forEach((paginationBullet) => {
    paginationBullet.classList.remove('active-bullet');
    if (paginationBullet.classList.contains(currentSection)) {
      paginationBullet.classList.add('active-bullet');
    }
  });
});

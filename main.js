const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItemLinks = document.querySelectorAll('.nav-item');
const modal = document.getElementById('modal');
const modalBg = document.getElementById('modal-bg');
const ctaBtns = document.querySelectorAll('.cta-btn');
const paginationBullets = document.querySelectorAll('.pagination__bullet');
const sections = document.querySelectorAll('section');
const hamburgerBars = document.querySelectorAll('.hamburger__bar');

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

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

//Modal
ctaBtns.forEach((ctaBtn) => {
  ctaBtn.addEventListener('click', openModal);
});

modalBg.addEventListener('click', closeModal);

function openModal() {
  modal.classList.add('modal-open');
}

function closeModal() {
  modal.classList.remove('modal-open');
}
//Swiper

const swiper = new Swiper('.mySwiper', {
  grabCursor: true,
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

//Gsap

const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } });

mm.add('(max-width: 1024px)', () => {
  tl.from('.header', { y: -100 });
  tl.from('.hero-section__arrow-down', { y: -500, opacity: 0 });

  return () => {
    tl.kill();
  };
});

mm.add('(min-width: 1024px)', () => {
  tl.from('.header', { y: -100 });
  tl.from('.hero-section__arrow-down', { y: -500, opacity: 0 });
  tl.from('.pagination__bullet', { opacity: 0, stagger: 0.1 });

  return () => {
    tl.kill();
  };
});

//Scrolltrigger
gsap.utils.toArray('.section').forEach((section) => {
  const columnTexts = section.querySelectorAll('.column-text');
  const columnImgs = section.querySelectorAll('.column__img');

  const fade = gsap
    .timeline({ paused: true })
    .from(columnTexts, { opacity: 0, duration: 1.5 });

  const scale = gsap.timeline({ paused: true }).from(columnImgs, {
    y: 200,
    opacity: 0,
    duration: 0.5,
    scale: 0.5,
  });

  ScrollTrigger.create({
    trigger: section,
    start: 'top center',

    onEnter: () => {
      fade.play(), scale.play();
    },
    onLeaveBack: () => {
      fade.reverse(), scale.reverse();
    },
  });
});

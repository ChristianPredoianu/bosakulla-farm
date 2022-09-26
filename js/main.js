import nav from './nav';
import swiper from './swiper';
import gsapMain from './gsapMain';
import { openModal, closeModal } from './modal';
import { setActiveBulletClick, setActivebulletScroll } from './pagination';

const ctaBtns = document.querySelectorAll('.cta-btn');
const modalBg = document.getElementById('modal-bg');
const paginationBullets = document.querySelectorAll('.pagination__bullet');
const sections = document.querySelectorAll('section');
const form = document.getElementById('contact-form');

nav();
swiper();
gsapMain();

setActiveBulletClick(paginationBullets);

window.addEventListener('scroll', () => {
  setActivebulletScroll(paginationBullets, sections);
});

ctaBtns.forEach((ctaBtn) => {
  ctaBtn.addEventListener('click', openModal);
});

modalBg.addEventListener('click', closeModal);

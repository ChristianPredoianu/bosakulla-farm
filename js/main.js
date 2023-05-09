import nav from './nav';
import swiper from './swiper';
import gsapMain from './gsapMain';
import cookieconscentInit from './cookieconsentInit';
import { openModal, closeModal } from './modal';
import { setActiveBulletClick, setActivebulletScroll } from './pagination';

const ctaBtns = document.querySelectorAll('.cta-btn'),
  modalBg = document.getElementById('modal-bg'),
  paginationBullets = document.querySelectorAll('.pagination__bullet'),
  sections = document.querySelectorAll('section');

nav();
swiper();
gsapMain();
cookieconscentInit();

setActiveBulletClick(paginationBullets);

window.addEventListener('scroll', () => {
  setActivebulletScroll(paginationBullets, sections);
});

ctaBtns.forEach((ctaBtn) => {
  ctaBtn.addEventListener('click', openModal);
});

modalBg.addEventListener('click', closeModal);

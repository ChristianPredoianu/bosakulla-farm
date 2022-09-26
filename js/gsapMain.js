export default () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

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
};

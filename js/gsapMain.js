export default () => {
  /*   let mm = gsap.matchMedia();

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
  }); */
};

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.snap-section').forEach((layer) => {
  ScrollTrigger.create({
    trigger: layer,
    start: 'top top',
    snap: 1,
    duration: 0.1,
  });
});

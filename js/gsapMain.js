export default () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  mm.add('(min-width: 1024px)', () => {
    gsap.utils.toArray('.snap-section').forEach((layer) => {
      ScrollTrigger.create({
        trigger: layer,
        start: 'top top',
        snap: 1,
        duration: 0.1,
      });
    });
  });
};

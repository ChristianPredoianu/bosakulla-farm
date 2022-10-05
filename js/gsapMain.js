export default () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.snap-section').forEach((layer) => {
    ScrollTrigger.create({
      trigger: layer,
      start: 'top top',
      snap: 1,
      duration: 0.1,
    });
  });
};

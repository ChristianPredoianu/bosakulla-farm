export function setActiveBulletClick(paginationBullets) {
  paginationBullets.forEach((paginationBullet) => {
    paginationBullet.addEventListener('click', function () {
      paginationBullets.forEach((paginationBullet) => {
        paginationBullet.classList.remove('active-bullet');
      });
      this.classList.add('active-bullet');
    });
  });
}

export function setActivebulletScroll(paginationBullets, sections) {
  let currentSection;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      currentSection = section.id;
    }
  });

  paginationBullets.forEach((paginationBullet) => {
    paginationBullet.classList.remove('active-bullet');
    if (paginationBullet.classList.contains(currentSection)) {
      paginationBullet.classList.add('active-bullet');
    }
  });
}

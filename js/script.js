window.SimpleAnime = class {
  constructor() {
    (this.items = document.querySelectorAll("[data-anime]")), this.init();
  }
  animateItems() {
    this.items.forEach((t) => {
      const e = Number(t.getAttribute("data-anime"));
      isNaN(e) ||
        setTimeout(() => {
          t.classList.add("anime");
        }, e);
    });
  }
  handleVisibility() {
    void 0 !== document.visibilityState
      ? "visible" === document.visibilityState && this.animateItems()
      : this.animateItems();
  }
  init() {
    (this.handleVisibility = this.handleVisibility.bind(this)),
      this.handleVisibility(),
      document.addEventListener("visibilitychange", this.handleVisibility);
  }
};

new SimpleAnime();

const sections = document.querySelectorAll('.js-scroll');

const windowHeight = window.innerHeight * 0.8;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = sectionTop - windowHeight < 0;

    if (sectionVisible) {
      section.classList.add('active');
    }
  })
}
animaScroll();

window.addEventListener('scroll', animaScroll);
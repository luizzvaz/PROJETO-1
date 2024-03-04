export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    // links  =  '[data-scroll="suave"] a[href^="#"]'
    this.scrollSuave = this.scrollSuave.bind(this);
  }

  scrollSuave(event) {
    event.preventDefault();
    const herfe = event.currentTarget.getAttribute('href');
    const secao = document.querySelector(herfe);
    secao.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollSuave);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}

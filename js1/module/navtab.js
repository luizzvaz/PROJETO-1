export default class tabNav {
  constructor(menu, content) {
    this.tabmenu = document.querySelectorAll(menu);
    this.tabcontent = document.querySelectorAll(content);
    this.ativoClass = 'ativo';
  }

  ative(index) {
    this.tabcontent.forEach((itens) => {
      itens.classList.remove(this.ativoClass);
    });
    const direcao = this.tabcontent[index].dataset.anima;
    this.tabcontent[index].classList.add(direcao, this.ativoClass);
  }

  // add tab nav aos eventos

  addTabNavEvnent() {
    this.tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => { this.ative(index); });
    });
  }

  init() {
    if (this.tabmenu.length && this.tabcontent.length) {
      // ativar o primeiro item
      this.ative(0);
      this.addTabNavEvnent();
    }
  }
}

export default class Acordion {
  constructor(list) {
    this.acordionList = document.querySelectorAll(list);
    this.activeclass = 'ativar';
  }
  // add a classe aos itens

  ativando(item) {
    item.nextElementSibling.classList.toggle(this.activeclass);
    item.classList.toggle(this.activeclass);
  }
  // add os eventos aos itens

  addAcordionEvent() {
    this.acordionList.forEach((item) => {
      item.addEventListener('click', () => this.ativando(item));
    });
  }
  // inicia funçao

  init() {
    if (this.acordionList.length) {
      this.ativando(this.acordionList[0]);
      this.addAcordionEvent();
    }
  }
}
// if (acordionList.length) {
//   acordionList[0].nextElementSibling.classList.add(this.activeclass);
//   acordionList.forEach((item, index) => {
//     item.addEventListener('click', () => {
//       console.log(index);
//       item.nextElementSibling.classList.toggle(this.activeclass);
//     });
//   });
// }

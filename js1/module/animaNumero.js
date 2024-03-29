export default function animaNumeros() {
  const numeros = document.querySelectorAll('[data-numeros]');
  function ligarNumero() {
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let i = 0;
      const timer = setInterval(() => {
        i += incremento;
        numero.innerText = i;
        if (i >= total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, Math.random() * (1 - 0.01) + 0.1);
    });
  }
  let observador;
  function observando(mutacao) {
    if (mutacao[0].target.classList.contains('ativou')) {
      observador.disconnect();
      ligarNumero();
    }
  }
  const miraObservador = document.querySelector('.numeros');
  observador = new MutationObserver(observando);
  observador.observe(miraObservador, { attributes: true });
}

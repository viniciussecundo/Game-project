const shadow = document.querySelector(".shadow");
const caixa = document.querySelector(".caixa");

const jump = () => {
  shadow.classList.add("jump");

  setTimeout(() => {
    shadow.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const caixaPosition = caixa.offsetLeft;

  if (caixaPosition <= 120) {
    caixa.style.animation = "none";
    caixa.style.left = `${caixaPosition}px`;
  }
}, 10);
document.addEventListener(
  "keydown",
  jump
); /*serve para ativação do evento funcionar quando apertarmos uma tecla*/

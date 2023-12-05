const divisaoContas = function (contaAgua, contaLuz) {
  const somaContas = contaAgua + contaLuz;
  const totalMae = somaContas / 2 - contaAgua;
  return totalMae;
};

const calcular = document.querySelector(".calcular");
const valorAgua = document.getElementById("agua");
const valorLuz = document.getElementById("luz");
const htmlResultado = document.querySelector(".resultado");
const htmlValor = document.querySelector(".valor");
const body = document.body;
const main = document.querySelector("main");
const voltar = document.querySelector(".voltar");

calcular.addEventListener("click", function (e) {
  e.preventDefault();
  const contaAgua = valorAgua.value;
  const contaLuz = valorLuz.value;
  if (contaAgua && contaLuz) {
    main.classList.add("ativo");
    const resultado = divisaoContas(Number(contaAgua), Number(contaLuz));
    htmlResultado.classList.remove("ativo");
    htmlResultado.style.margin = "350px 0 0 0 ";
    htmlValor.innerHTML = `R$ ${resultado.toFixed(2)}`;
    voltar.classList.remove("ativo");
  }
});

voltar.addEventListener("click", function (e) {
  e.preventDefault();
  main.classList.remove("ativo");
  htmlResultado.classList.add("ativo");
  htmlResultado.style.margin = "initial";
  voltar.classList.add("ativo");
  valorAgua.value = null;
  valorLuz.value = null;
});

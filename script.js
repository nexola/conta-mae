const divisaoContas = function (contaAgua, contaLuz) {
  const somaContas = contaAgua + contaLuz;
  const totalMae = somaContas / 2 - contaAgua;
  return totalMae;
};

const calcular = document.querySelector("a");
const valorAgua = document.getElementById("agua");
const valorLuz = document.getElementById("luz");
const htmlResultado = document.querySelector(".resultado");
const htmlValor = document.querySelector(".valor");
const body = document.body;

calcular.addEventListener("click", function (e) {
  e.preventDefault();
  const contaAgua = valorAgua.value;
  const contaLuz = valorLuz.value;
  if (contaAgua && contaLuz) {
    const resultado = divisaoContas(Number(contaAgua), Number(contaLuz));
    htmlResultado.classList.remove("ativo");
    htmlValor.innerHTML = `R$ ${resultado.toFixed(2)}`;
  }
});

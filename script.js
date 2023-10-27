const selecionar360 = document.querySelectorAll(".mudar");
const imagem1 = document.querySelector(".imagem1");
const imagem2 = document.querySelector(".imagem2");

imagem2.addEventListener("click", function () {
  this.classList.toggle("ativo");

  if (this.classList.contains("ativo")) {
    // Trocar as imagens quando o elemento é ativado
    imagem1.src = "/img/sofa.gif";
    imagem2.src = "/img/Vector(fechar).png";
  } else {
    // Restaurar as imagens originais quando o elemento é desativado
    imagem1.src = "/img/image 2.png";
    imagem2.src = "/img/Vector.png";
  }
});

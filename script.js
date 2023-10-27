const imagem1 = document.querySelector(".imagem1");
const imagem2 = document.querySelector(".imagem2");

const imagemSofaGif = new Image();
imagemSofaGif.src = "/img/sofa.gif";

imagem2.addEventListener("click", function () {
  this.classList.toggle("ativo");

  if (this.classList.contains("ativo")) {
    imagem1.src = "/img/sofa.gif";
    imagem2.src = "/img/Vector(fechar).png";
  } else {
    imagem1.src = "/img/image 2.png";
    imagem2.src = "/img/Vector.png";
  }
});

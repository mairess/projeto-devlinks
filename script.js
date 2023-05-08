function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains('light')){
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Avatar-light.png")
    img.setAttribute("alt", "foto de Maires com fone sem fio sorrindo levemente de camisa preta e fundo roxo")
  } else{
    // se tiver sem light mode,manter imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute("alt", "foto de Maires com fone sem fio sorrindo abertamente de camisa branca e fundo roxo")
  }


}
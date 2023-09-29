// variável ator
let xPersonagem = 100; // Posição inicial em x do personagem
let yPersonagem = 462; // Posição inicial em y do personagem
let colisao = false; // Variável para verificar se houve colisão
let meusPontos = 0; // Pontuação inicial do jogador

// Função para exibir o personagem
function mostraPersonagem(){ 
   image(imgAtor,xPersonagem, yPersonagem, 30, 30); // Exibe o personagem na tela
}

// Função para movimentar o personagem
function movimentaPersonagem(){
  if (keyIsDown(UP_ARROW)){ // Move para cima ao pressionar a seta para cima
    yPersonagem -= 3;
  }
   if (keyIsDown(DOWN_ARROW)){ // Move para baixo ao pressionar a seta para baixo
    yPersonagem += 3;
  }
}

// Função para verificar colisões
function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
   colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoC, alturaC, xPersonagem, yPersonagem, 10)  // Verifica se houve colisão entre o personagem e um carro
    if (colisao){ 
     voltaPersonagem();// Retorna o personagem para a posição inicial
      somColisao.play();
      if (meusPontos > 0){
        meusPontos -= 1; // Reduz a pontuação se o jogador já tiver pontos
      }
      
    }
  }
}
// Função para retornar o personagem para a posição inicial
function voltaPersonagem(){
  yPersonagem = 455;
}

// Função para exibir a pontuação
function incluiPontos(){
  textSize(20);// Define o tamanho do texto
  text(meusPontos, width / 6, 30)   // Exibe a pontuação na tela 
}

// Função para contabilizar os pontos
function pontos(){ 
  if (yPersonagem <15){ // Se o personagem passou da linha superior
    meusPontos  += 1; // Adiciona um ponto à pontuação
    voltaPersonagem(); // Retorna o personagem para a posição inicial
    somPoint.play();
  }
}
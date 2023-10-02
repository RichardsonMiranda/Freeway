//variáveis do carro
let xCarros = [700, 700, 700, 700, 700, 700];
let yCarros = [55, 125, 190, 268, 338, 398]; // posições dos carros
let speedC = [2, 3.9, 2.9, 2.1, 3, 2.5]; //Velocidade do carro
let comprimentoC = 70; //Comprimento do carro
let alturaC = 40; // Altura do carro
let pontuacao = 0; // Adicione uma variável para a pontuação


function mostraCarro(){  // Esta função exibe os carros na tela
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoC, alturaC);
  }
}

function movimentaCarro(){ // Esta função move os carros na tela
  for (let i = 0; i <imagemCarros.length; i++){
    xCarros[i] -= speedC[i];
  }
}

// Esta função retorna os carros para a posição inicial após passarem completamente pela tela.
function voltaInicio(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 800;
      }
    }
}

// Esta função verifica se o carro passou completamente pela tela
function passouTodaTela(xCarro){
  return xCarro < - 34;
}

function aumentaVelocidade(){
  pontuacao++; // Aumenta a pontuação
  for (let i = 0; i < speedC.length; i++){
    speedC[i] += 0.2; // Aumenta a velocidade de todos os carros
  }
}
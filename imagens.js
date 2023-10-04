let imagemFundo;  // Variável para armazenar a imagem de fundo
let imgAtor;      // Variável para armazenar a imagem do personagem
let imgCarro;     // Variável para armazenar a imagem do carro 1
let imgCarro02;   // Variável para armazenar a imagem do carro 2
let imgCarro03;   // Variável para armazenar a imagem do carro 3

let somTrilha;    
let somColisao;
let somPoint;

// Função preload é executada antes do setup() e draw()
function preload(){
  // Carrega as imagens e as atribui às variáveis
  imagemFundo = loadImage("imagens/estrada.png"); // Carrega a imagem de fundo
  imgAtor = loadImage("imagens/ator-1.png");     // Carrega a imagem do personagem
  imgCarro = loadImage("imagens/carro-1.png");   // Carrega a imagem do carro 1
  imgCarro02 = loadImage("imagens/carro-2.png"); // Carrega a imagem do carro 2
  imgCarro03 = loadImage("imagens/carro-3.png"); // Carrega a imagem do carro 3
  
  // Cria um array de imagens de carros para uso posterior
  imagemCarros = [imgCarro, imgCarro02, imgCarro03, imgCarro, imgCarro02, imgCarro03]; 
  
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPoint = loadSound("sons/ponto.wav");
}

//function keyPressed() {
//  if (key === 'p' || key === 'P') { // Verifica se a tecla 'p' ou 'P' foi pressionada
//    if (somTrilha.isPlaying()) { // Verifica se o som está sendo reproduzido
//      somTrilha.pause(); // Pausa o som
//    } else {
//     somTrilha.loop(); // Se o som estiver pausado, retoma a reprodução
//    }
//  }
//}
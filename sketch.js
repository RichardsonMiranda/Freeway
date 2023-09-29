// Função de configuração, é executada uma vez quando o programa inicia
function setup() {
  createCanvas(700, 500); // Cria um canvas com largura de 700 e altura de 500 pixels
  somTrilha.loop(); // Som da trila começa junto com o jogo
}

// Função de desenho, é executada continuamente
function draw() {
  background(imagemFundo);// Define o fundo com a imagem de fundo
  mostraPersonagem(); // Exibe o personagem na tela
  mostraCarro();// Exibe os carros na tela
  movimentaCarro();// Move os carros
  movimentaPersonagem();// Move o personagem
  voltaInicio();// Verifica se algum carro passou da tela e o recoloca na posição inicial
  verificaColisao();// Verifica se houve colisão entre o personagem e os carros
  incluiPontos();// Exibe a pontuação na tela
  pontos(); // Atualiza os pontos e verifica se o personagem passou pela linha superior
}
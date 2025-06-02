function setup() {
    createCanvas(600, 400); // Cria uma tela de 600x400 pixels
    background(240);        // Cor de fundo cinza claro (podem alterar)
  }
  
  function draw() {
    fill(100, 150, 255);     // Cor do círculo
    noStroke();              // Sem contorno
    ellipse(mouseX, mouseY, 50, 50); // Círculo segue o mouse
  }
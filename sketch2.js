let stemX, stemY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(RGB, windowHeight);
  
  // Initial stem position to start near the mouse at the beginning
  stemX = mouseX;
  stemY = mouseY;
}

function draw() {
  // Background color based on mouse movement
  background(mouseX + 250, windowWidth - 300, mouseY + 280);

  // as it moves, it will kind of delay the petals
  let delay = 0.05;
  stemX += (mouseX - stemX) * delay; 
  stemY += (mouseY - stemY) * delay;


  let a = mouseX / 2 - 50;
  let b = mouseY / 2 - 50;
  fill(color('#DAF7A6'));
  rect(stemX, stemY, a, b); // following delay

  //for movement even while user is stationary
  let petalOffset = 15 + sin(frameCount * 0.05) * 5; 

  // Drawing the petals around the center
  fill(color('#ded1f0'));
  circle(mouseX, mouseY + petalOffset, (b - a) + 15);
  circle(mouseX, mouseY - petalOffset, (b - a) + 15);
  circle(mouseX + petalOffset, mouseY, (b - a) + 15);
  circle(mouseX - petalOffset, mouseY, (b - a) + 15);

  fill(color('#FFC300'));
  circle(mouseX, mouseY, b - a);
}

function keyPressed() {
    if (keyCode == 27) { //27 ='Esc'
      window.location.href = "index.html";
    }
  }
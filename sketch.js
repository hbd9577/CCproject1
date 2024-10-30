let r,g,b;
let webtitle,vol;
let flower;
let pg2 = false;
function preload(){
  flower = loadImage('bloom.jpg');
}
function setup() {
  webtitle = select("#web-title");
  vol = select("#vol");
  createCanvas(windowWidth,600);
  r= random(10);
  g=random(55);
  b= random(200);
}

function draw() {
  //headsings change accordingly with bg
  background(r,g,b);
  webtitle.style("color",`rgb(${r},${g},${b})`);
  vol.style("color",`rgb(${r},${g},${b})`);
  if (r < 40 || r > 75){
    r = random(40, 75)
  }else{ 
    r += random(-1, 1);
  }

  if (g < 50 || g > 110){
    g = random(50, 110)
  }else{ 
    g += random(-1, 1);
  }
  
  if (b < 125 || b > 255){
    b = random(125, 255)
  }else{ 
    b += random(-1, 1);
  }
  cloud(550,320);
  flowers(870,160);
  dots(360,150);
  info();

  
}

//sketch1
function cloud(x, y) {

  fill(173, 216, 230);
  noStroke();
  rect(x, y, 340, 220);

  let cloudX = x + 40;
  let cloudY = y + 40;

  fill(255); 
  ellipse(cloudX - 20, cloudY, 40, 30); 
  ellipse(cloudX + 20, cloudY, 40, 30); 
  ellipse(cloudX, cloudY - 15, 50, 35); 
}

//sketch2
function flowers(x, y) {
  image(flower, x, y, 120, 95);
} 

//sketch 3
function dots(x, y) {

  let w = 150;
  let h = 200;

  fill(0);
  rect(x, y, w, h);

  let centerX = x + w / 2;
  let centerY = y + h / 2;

  // Generate random dots
  for (let i = 0; i < 175; i++) {
    let dotX = random(x, x + w);
    let dotY = random(y, y + h);

    let distance = dist(dotX, dotY, centerX, centerY);

    let opacity = map(distance, 0, max(w, h) / 2, 55, 250); 

    fill(255, opacity);
    ellipse(dotX, dotY, 5);
  }
}

function info(){

  stroke("#d6f8b8");
  textFont('helvetica');
  text("more to come...\n press esc to leave the sketches", width-220, 200);
}

function mousePressed() {
  // click is inside the cloud area
  if (mouseX > 550 && mouseX < 550 + 340 &&
      mouseY > 320 && mouseY < 320 + 220) {
    window.open("sketch1.html", "_blank"); 
  }

  //click is inside the flowers area
  else if (mouseX > 870 && mouseX < 870 + 120 &&
           mouseY > 160 && mouseY < 160 + 95) {
    window.open("sketch2.html", "_blank"); 
  }

  //click is inside the dots area
  else if (mouseX > 360 && mouseX < 360 + 150 &&
           mouseY > 150 && mouseY < 150 + 200) {
    window.open("sketch3.html", "_blank");
  }

}

let angle, radius, audio, reverb;
let time = 2;

function preload() {
  audio = loadSound("gg.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angle = 0;
  radius = 15;

  // Set up reverb effect
  reverb = new p5.Reverb();
  reverb.process(audio, time, 2); 
  audio.loop();

}

function draw() {
  // Randomly swap color between white and black every few frames
  if (frameCount % 180 === 0) { // Change color every 3 second since fps is 60
    let r = random(1);
    if(r <= 0.5){
        stroke(255);
    }
    else{
        stroke(0);
    }
  }

  strokeWeight(2);

  let x = cos(angle) * radius;
  let y = sin(angle) * radius;


  translate(width / 2, height / 2);
  line(0, 0, x, y);


  angle += 0.05;
  radius += 0.5;

//resetting radius
  if (radius > width / 2) {
    background(0); // clear bg
    radius = 15;
  }

}

function mousePressed() {
  time += 1; 
  reverb.set(time, 2);
}


function keyPressed() {
    if (keyCode == 27) { //27 ='Esc'
      window.location.href = "index.html"; 
    }
  }
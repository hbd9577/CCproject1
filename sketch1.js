let clouds = [];
let numClouds = 15;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // Generate initial clouds
  for (let i = 0; i < numClouds; i++) {
    clouds.push(new Cloud());
  }
}

function draw() {
  sky();
  
  for (let cloud of clouds) {
    cloud.move();
    cloud.display();
  }
}

function sky() {
   // gradient sky
  for (let y = 0; y < height; y++) {
    let mid = map(y, 0, height, 0, 1);
    let c = lerpColor(color(135, 206, 250), color(70, 130, 180), mid); // light blue to darker blue
    stroke(c);
    line(0, y, width, y);
  }
}

class Cloud {
  constructor() {
    this.x = random(width);
    this.y = random(height, height * 1.5); // Start clouds bottom
    this.size = random(50, 150);
    this.speed = map(this.size, 50, 150, 1, 0.5); // smaller = faster
    this.opacity = random(100, 200);
  }

  move() {
    this.y -= this.speed; // cloud moves up
    if (this.y < -this.size) { // cloud leaves screen
      this.y = height + this.size; // add it back to bottom, offscreen
      this.x = random(width); 
      this.size = random(50, 150); //give it a new size
      this.speed = map(this.size, 50, 150, 1, 0.5); // map speed to size AGAIN
      this.opacity = random(100, 200); // rand opacity
    }
  }

  display() {
    fill(255, this.opacity); // Apply opacity for cloud effect
    noStroke();
    ellipse(this.x, this.y, this.size, this.size * 0.6); // Draw cloud as ellipse
  }
}

function keyPressed() {
    if (keyCode == 27) { //27 ='Esc'
      window.location.href = "index.html"; 
    }
  }

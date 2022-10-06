let zOne = "Epipelagic Zone\n(The Sunlight Zone)";
let zTwo = "Mesopelagic Zone\n(The Twilight Zone)";
let zThree = "Bathypelagic Zone\n(The Midnight Zone)";
let zFour = "Abyssopelagic Zone\n(The Abyss)";
let zFive = "Hadal Zone\n(The Trenches)";

let seaLev = "— Sea Level"
let twoLev = "— 200 m"
let threeLev = "— 1,000 m"
let fourLev = "— 4,000 m"
let fiveLev = "— 10,000 m"
let deeep = "— 11,000 m"

let pos = 0;

// have the same num of fish in each layer of ocean to make looping easier

let num = 5;

let sunCreatures = [];
let twiCreatures = [];
let nightCreatures = [];
let abyssCreatures = [];
let trenchCreatures = [];

function setGradient(c1, c2) {
  noFill();
  for (var i = 0; i < height; i++) {
    var inter = map(i, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, i, width, i);
  }
}

function mouseWheel(event) {
  pos += event.delta;
}

// find a better way to do this. 
// another array containing all fish ?
// inheritance... .... ....... ?

function mouseClicked() {
  for (var i = 0; i < sunCreatures.length; i++) {
    if (mouseX < sunCreatures[i].position.x +25 && mouseX > sunCreatures[i].position.x -25)
    {
      if (mouseY < sunCreatures[i].position.y -pos +25 && mouseY > sunCreatures[i].position.y -pos -25)
      {
        console.log("SUN TESTING");
        // if creatures[i].name is... 
        // bring up species specific info
      }
    }
  }
  for (var i = 0; i < twiCreatures.length; i++) {
    if (mouseX < twiCreatures[i].position.x +25 && mouseX > twiCreatures[i].position.x -25)
    {
      if (mouseY < twiCreatures[i].position.y -pos +25 && mouseY > twiCreatures[i].position.y -pos -25)
      {
        console.log("TWI TESTING");
        // if creatures[i].name is... 
        // bring up species specific info
      }
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < num; i++) {
    sunCreatures[i] = new Creature(0, height*2, "sun", 50);
    twiCreatures[i] = new Creature(height*2, height*4, "twilight", 100);
    nightCreatures[i] = new Creature(height*4, height*6, "midnight", 150);
    abyssCreatures[i] = new Creature(height*6, height*8, "abyss", 200);
    trenchCreatures[i] = new Creature(height*8, height*10, "trench", 255);
  }
}

function draw() {

  let colorChange = pos/31;

  c1 = color(12-colorChange, 66-colorChange, 125-colorChange);
  c2 = color(2-colorChange, 13-colorChange, 31-colorChange);
  setGradient(c1, c2);

  for (let i = 0; i < sunCreatures.length; i++) {
    sunCreatures[i].update();
    sunCreatures[i].display();

    twiCreatures[i].update();
    twiCreatures[i].display();

    nightCreatures[i].update();
    nightCreatures[i].display();

    abyssCreatures[i].update();
    abyssCreatures[i].display();

    trenchCreatures[i].update();
    trenchCreatures[i].display();
  }

  textSize(15);
  textFont('Helvetica');
  fill(255);

  if (pos > -200 && pos < 8000)
  {
    textAlign(CENTER);
    text(zOne, windowWidth/2, 40-pos);
    text(zTwo, windowWidth/2, windowHeight*2+20-pos);
    text(zThree, windowWidth/2, windowHeight*4+20-pos);
    text(zFour, windowWidth/2, windowHeight*6+20-pos);
    text(zFive, windowWidth/2, windowHeight*8+20-pos);

    textAlign(LEFT);
    text(seaLev, -2, 20-pos);
    text(twoLev, -2, windowHeight*2+20-pos);
    text(threeLev, -2, windowHeight*4+20-pos);
    text(fourLev, -2, windowHeight*6+20-pos);
    text(fiveLev, -2, windowHeight*8+20-pos);
    text(deeep, -2, windowHeight*10-20-pos);
  }
}

// add image param (based on type? is that possible?)
// color parameter for testing purposes
class Creature {
  constructor(min, max, type, color) {
    this.position = createVector(random(width),random(min, max));
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 2; 
    this.species = type;
    this.color = color;
    this.min = min;
    this.max = max;
  }
// REFACTOR THIS TO HAVE LESS NESTED CONDITIONALS
  update() {
    if (mouseX < this.position.x + 200 && mouseX > this.position.x - 200) 
    {
      if (mouseY < this.position.y + 200 - pos && mouseY > this.position.y - 200 - pos) 
      {
        if (this.position.y < this.min || this.position.y > this.max)
        { 
          this.velocity.y*=-3;
        }
        else
        {
          var mouseVect = createVector(mouseX,mouseY+pos);
          this.acceleration = p5.Vector.sub(mouseVect,this.position);
          this.acceleration.setMag(0.05);
        }
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity); 
      }
    }
    // else
    // {
    //   if (this.position.x > windowWidth)
    //   {
    //     this.position.x = 0;
    //   }
    //   if (this.position.x < 0)
    //   {
    //     this.position.x = windowWidth;
    //   }
    //   this.acceleration = (random(0.1),random(0.05));
    //   this.velocity.add(this.acceleration);
    //   this.velocity.limit(this.topspeed);
    //   this.position.add(this.velocity); 
    // }   
  }
  display() {
    fill(this.color);
    ellipse(this.position.x, this.position.y-pos, 50, 50);
  }
  checkEdges() {
    if (this.position.x > windowWidth || this.position.x < 0)
    {

    }
  }
}


const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var gameState;
var img;

function setup() {
  var canvas = createCanvas(1250, 400);
  engine = Engine.create();
  world = engine.world;

  img = loadImage("garbage.png");

  ground1 = new ground(600, 390, 1200, 20);
  sup1 = new ground(730, 350, 5, 100);
  sup2 = new ground(820, 350, 5, 100);
  crumpled = new scrap(200, 200, 50, 50);
  slingy = new slingshot(crumpled.body, {x: 200, y: 200});
}

function draw() {
  background("black");
  Engine.update(engine);
  ground1.display();
  crumpled.display();
  sup1.display();
  sup2.display();
  image(img, 700, 275, 150, 125);
  slingy.display();
}

function mouseDragged(){
  Matter.Body.setPosition(crumpled.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingy.fly();
  gameState = "launched";
}


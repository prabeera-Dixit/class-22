const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var randomObject;
var ballObject;

function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;

var randomObject_options = {
isStatic: true
}

  randomObject = Bodies.rectangle(200,390,400,20,randomObject_options);
  World.add(world, randomObject);

  var ballObject_options = {
    restituition:1.0
    }
    
      ballObject = Bodies.circle(200,100,20,ballObject_options);
      World.add(world, ballObject);
}

function draw() {
  background("red");  

  Engine.update(engine);

rectMode(CENTER);
rect(randomObject.position.x, randomObject.position.y,400,20);

ellipseMode(RADIUS);
ellipse(ballObject.position.x,ballObject.position.y,20,20);

  drawSprites();
}
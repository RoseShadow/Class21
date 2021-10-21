const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

let engine;
let world;

var wall1,wall2,wall3,wall4;
var button1,buton2;
var ball;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  ellipseMode(RADIUS);

  //creating objects for Ground class
  wall1=new Ground(200,390,400,20);
  wall2 = new Ground(390,200,20,400);
  wall3 = new Ground(10,200,20,400);
  wall4 = new Ground(200,10,400,20);

  button1=createImg("right.png");
  button1.position(220,30);
  button1.size(50,50);
  button1.mouseClicked(hForce);
 
  button2=createImg("up.png");
  button2.position(20,30);
  button2.size(50,50);
  button2.mouseClicked(vForce);
  

  var ballOptions ={
    restitution:0.95
  }
  ball= Bodies.circle(200,100,20,ballOptions);
  World.add(world,ball);
  
}

function draw() 
{


  background(51);
  Engine.update(engine);
  
  wall1.show();
  wall2.show();
  wall3.show();
  wall4.show();

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}

function hForce(){
  //name of the body, starting value, ending value
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce(){
  //name of the body, starting value, ending value
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
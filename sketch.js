
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ballimg1
var ground
var hoop
var hoopimg
function preload()
{
  ballimg1 = loadImage("ballimg1.png")	
  hoopimg = loadImage("hoop.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball=Bodies.circle(100,100,60,{density:0.8})
    World.add(world,ball)
    ground=Bodies.rectangle(400,690,800,20,{isStatic: true});
    World.add(world,ground)
    
    // World.add(world,hoop)
    
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);

  imageMode(RADIUS);
  image(ballimg1,ball.position.x, ball.position.y,60,60);

  image(hoopimg,600,300,200,200);

  fill("orange");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)
  
  if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(ball, ball.position, {x:260,y: -190})
  }
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
    

	ground = new Ground(width/2, 670, width, 20);
    leftSide = new Ground(1100, 600, 20, 120);
	rightSide = new Ground(1000, 600, 20, 120);
 
    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {

  background(52);

  ellipse(ball.position.x,ball.position.y,20);
  
  ground.show();
  leftSide.show();
  rightSide.show();
  Engine.update(engine);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:80,y:-80})
		console.log("arrow");
	}
}



var ground,box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball = createSprite(200,20);

 var ground = createSprite(600,470,1400,10);

 var box1 = createSprite(1000,450,100,10);
 
 var box2 = createSprite(950,400,10,120);

 var box3 = createSprite(1050,400,10,120);

 var box4 = createSprite(970,400,10,100);

 var box5 = createSprite(1000,400,10,100);

 var box6 = createSprite(1030,400,10,100);

var box7 = createSprite(1000,400,100,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}





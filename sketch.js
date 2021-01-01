const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin, paper,ground
var world;
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundo=new ground(width/2,670,width,20);
	paperto=new paper(200,450,70);
	dustbino=new dustbin(1200,650);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	})
	Render.run(render);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  paper.display();
  ground.display();
  dustbin.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
    
  	}
}










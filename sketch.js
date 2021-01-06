
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var groundatheight;
var chain1,chain2,chain3,chain4,chain5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball3 = new bob(300,560,30,30);
ball2 = new bob(360,560,30,30);
ball1 = new bob(240,560,30,30);
ball4 = new bob(420,560,30,30);
ball5 = new bob(480,560,30,30);
groundatheight = new roof(350,150,330,40);
chain3 = new rope(ball3.body,{x:300,y:150});
chain2 = new rope(ball2.body,{x:360,y:150});
chain1 = new rope(ball1.body,{x:240,y:150});
chain4 = new rope(ball4.body,{x:420,y:150});
chain5 = new rope(ball5.body,{x:480,y:150});




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();
groundatheight.display();

fill("black");
text(mouseX+","+mouseY,mouseX,mouseY);
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:150,y:-150});
	}
}




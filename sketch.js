
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(30,680,30);
	
	ground=new Ground(400,690,800,20);
	box1 = new Box(580,580,200,200);
	
	Engine.run(engine);
  
}


function draw() {

  background("white");
  keyPressed();
 paper.display();
 ground.display();
 box1.display();

}

function keyPressed(){
    if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{ x: 85,y :-85});
    }
}





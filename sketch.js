
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paper, ground;
var paperObject;
function preload()
{

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  paper = new Paper(70,25,50,50);
  ground = new Ground(600,height,1200,20);
  paperObject = new paperObject(70,70,50,50);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  paperObject.display();
  ground.display();
  
  drawSprites();
 
}
 



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, stand1, stand2
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31,block32
var polygon,polygon_img,slingshot

function preload()
{
	polygon_img = loadImage('polygon.png');
}

function setup() {
	createCanvas(1200, 600);

	image(polygon_img,0,0)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,585,1200,30)
	stand1 = new Ground(500,450,240,10)
	stand2 = new Ground(950,350,240,10)

	block1 = new Block(410,428,30,30)
	block2 = new Block(440,428,30,30)
	block3 = new Block(470,428,30,30)
	block4 = new Block(500,428,30,30)
	block5 = new Block(530,428,30,30)
	block6 = new Block(560,428,30,30)
	block7 = new Block(590,428,30,30)
	block8 = new Block(440,398,30,30)
	block9 = new Block(470,398,30,30)
	block10 = new Block(500,398,30,30)
	block11 = new Block(530,398,30,30)
	block12 = new Block(560,398,30,30)
	block13 = new Block(470,368,30,30)
	block14 = new Block(500,368,30,30)
	block15 = new Block(530,368,30,30)
	block16 = new Block(500,338,30,30)

	block17 = new Block(860,328,30,30)
	block18 = new Block(890,328,30,30)
	block19 = new Block(920,328,30,30)
	block20 = new Block(950,328,30,30)
	block21 = new Block(980,328,30,30)
	block22 = new Block(1010,328,30,30)
	block23 = new Block(1040,328,30,30)
	block24 = new Block(890,298,30,30)
	block25 = new Block(920,298,30,30)
	block26 = new Block(950,298,30,30)
	block27 = new Block(980,298,30,30)
	block28 = new Block(1010,298,30,30)
	block29 = new Block(920,268,30,30)
	block30 = new Block(950,238,30,30)
	block31 = new Block(980,268,30,30)
	block32 = new Block(950,238,30,30)

	polygon = Bodies.circle(50,200,20)
	imageMode(CENTER)
	image(polygon_img,polygon.position.x,polygon.position.y,48,48)
	World.add(world,polygon)

	slingshot = new SlingShot(this.polygon,{x:100,y:200})




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('grey');

  ground.display()
  stand1.display()
  stand2.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()

  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  block26.display()
  block27.display()
  block28.display()
  block29.display()
  block30.display()
  block31.display()
  block32.display()

  slingshot.display()
  polygon.display()
  
  drawSprites();
 
}




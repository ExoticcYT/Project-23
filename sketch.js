var helicopterIMG, helicopterSprite, packageSprite,packageIMG, redBox, redBox1, redBoxB;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	redBox = createSprite(width/2, height-50, 200, 20);
	redBox.shapeColor = "red";

	redBox1 = createSprite(width/2 + 100, height - 90, 20, 100);
	redBox1.shapeColor = "red";

	redBoxB = createSprite(width/2 - 100, height - 90, 20, 100);
	redBoxB.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	if(packageSprite.y == redBox.y - 20){
		Matter.Body.setStatic(packageBody, true);
	}

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

	World.add(world, ground);

	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  if (//redBox.x - packageSprite.x < packageSprite.width + redBox.width
	//&& packageSprite.x - redBox.x < packageSprite.width + redBox.width
	//redBox.y - packageSprite.y < packageSprite.height + redBox.height
	packageSprite.y - redBox.y < packageSprite.height + redBox.height
	) 
 {
	Matter.Body.setStatic(packageBody, true);
 }
 	redBox.debug = true;
	 packageSprite.debug = true;
	 packageSprite.setCollider("rectangle", 0, redBox.height/2);
  drawSprites();

 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
  }
}
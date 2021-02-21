const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob (750-(120*2),600,120);
	bobObject2 = new Bob (750-120,600,120);
	bobObject3 = new Bob (750,600,120);
	bobObject4 = new Bob (750+120,600,120);
	bobObject5 = new Bob (750+(120*2),600,120);

	pandelum = new Roof (750,50,600,50);

	

	//rope1 = new Rope(pandelum.body,bobObject1.body);
	//rope2 = new Rope(pandelum.body,bobObject2.body);
	//rope3 = new Rope(pandelum.body,bobObject3.body);
	//rope4 = new Rope(pandelum.body,bobObject4.body);
	//rope5 = new Rope(pandelum.body,bobObject5.body);



	//rope1=new Rope(bobObject1.body,pandelum.body,750-(120*2),600)
	//rope2=new Rope(bobObject2.body,pandelum.body,750-120,600)
	//rope3=new Rope(bobObject3.body,pandelum.body,750,600)
	//rope4=new Rope(bobObject4.body,pandelum.body,750+120,600)
	//rope5=new Rope(bobObject5.body,pandelum.body,750+(120*2),600)

	bobDiameter = 240


	rope1=new Rope(bobObject1.body,pandelum.body,-bobDiameter*2+240,25 )
	rope2=new Rope(bobObject2.body,pandelum.body,-bobDiameter*1+120, 25)
	rope3=new Rope(bobObject3.body,pandelum.body,0, 25)
	rope4=new Rope(bobObject4.body,pandelum.body,bobDiameter*1-120, 25)
	rope5=new Rope(bobObject5.body,pandelum.body,bobDiameter*2-240, 25)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  fill(rgb(0,0,0))
  textSize(25);
  text("To move left",120,200)
  text("To move right",1120,200)


  fill(rgb(225,0,225));

  textSize(20)
  text("Press 1 to move 1 bob",100,250)
  text("Press 2 to move 2 bobs",100,290)
  text("Press 3 to move 3 bobs",100,330)
  text("Press 4 to move 4 bobs",100,370)
 
  text("Press 5 to move 1 bob",1100,250)
  text("Press 6 to move 2 bobs",1100,290)
  text("Press 7 to move 3 bobs",1100,330)
  text("Press 8 to move 4 bobs",1100,370)

  
  
  drawSprites();
 pandelum.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 fill(rgb(250,250,15));
 textSize(17)
 text("Look at the text on the left and right of the newton's cradle to move the bobs",466.5,55)


}

function keyPressed() {
	//left

	if (keyCode === 49) {
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	}
	if (keyCode === 50) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-50,y:-45});
	  }
	  if (keyCode === 51) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-50,y:-45});
	  }
	  if (keyCode === 52) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:-50,y:-45});
	  }

	  // right

	  if (keyCode === 53) {
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:50,y:45});
	  }
	  if (keyCode === 54) {
		  Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:50,y:45});
		  Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:50,y:45});
		}
		if (keyCode === 55) {
		  Matter.Body.applyForce(bobObject5.body,bobObject1.body.position,{x:50,y:45});
		  Matter.Body.applyForce(bobObject4.body,bobObject2.body.position,{x:50,y:45});
		  Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:50,y:45});
		}
		if (keyCode === 56) {
		  Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:50,y:45});
		  Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:50,y:45});
		  Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:50,y:45});
		  Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:50,y:45});
		}
}



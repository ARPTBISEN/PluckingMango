
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;
var mango9;
var mango0;
var throwing;
var world,boy;
var bgImage;
var mainGround,mainGroundimg;

//*************************************************************************************************************
function preload(){
	boy=loadImage("images/boy.png");
	bgImage=loadImage("images/bg.png");
	mainGroundimg=loadImage("images/ground.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    //Adding classes on desire platform
	mango1=new mango(1100,100,30);
	mango2=new mango(1017,158,30);
	mango3=new mango(980,245,30);
	mango4=new mango(1170,206,30);
	mango5=new mango(985,61,30);
	mango6=new mango(1100,180,30);
	mango7=new mango(930,200,30);
	mango8=new mango(1050,112,30);
	mango9=new mango(1230,240,30);
	mango0=new mango(1120,30,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,585,width,40);
	stoneObj=new Stone(200,200,30)
	throwing=new slingShot(stoneObj.body,{x:230,y:420})
	
	Engine.run(engine);

}
//*************************************************************************************************************
function draw() {
	
	
	
	background(bgImage);
	//Add code for displaying text here!
	image(boy ,200,340,200,300);
	
	//detecting collision
	detectollision(stoneObj,mango1);
	detectollision(stoneObj,mango2);
	detectollision(stoneObj,mango3);
	detectollision(stoneObj,mango4);
	detectollision(stoneObj,mango5);
	detectollision(stoneObj,mango6);
	detectollision(stoneObj,mango7);
	detectollision(stoneObj,mango8);
	detectollision(stoneObj,mango9);
	detectollision(stoneObj,mango0);
	
	//mangos.
	treeObj.display();
	mango1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
    mango8.display();
    mango9.display();
    mango0.display();
  
    stoneObj.display();
    throwing.display();
    groundObject.display();
    mainGroundfunction();
    drawSprites();

  
	//here is the code to display text on the screen 
    push();
    fill("black");
    textSize(20);
    text("Click 'Space' To Get Another Chance",10,20);
	pop();
	

}

//*************************************************************************************************************

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})

}

//*************************************************************************************************************

function mouseReleased(){
    throwing.fly();
}

//*************************************************************************************************************

function detectollision(lstones,lmango){
	if(lstones.body.position.x- lmango.body.position.x <lmango.diametre + lstones.diametre
		&& lmango.body.position.x - lstones.body.position.x  < lmango.diametre + lstones.diametre
		&&lstones.body.position.y -lmango.body.position.y < lmango.diametre + lstones.diametre
		&& lmango.body.position.y - lstones.body.position.y < lmango.diametre + lstones.diametre){
			Matter.Body.setStatic(lmango.body,false);
		}
		
	}

//*************************************************************************************************************

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body,{x:230,y:420})
		throwing.attach(stoneObj.body)
	}
}
//*************************************************************************************************************
//ground images to look better
function mainGroundfunction(){
	mainGround=createSprite(width/2,height+70)
	mainGround.addImage(mainGroundimg);
    mainGround.scale=0.34;
}
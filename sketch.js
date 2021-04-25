const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ground3;
var block1, block2,block3,block4,block5,block6,block7;
var block8, block9,block10,block11,block12;
var block13, block14,block15;
var block16;
var block17, block18,block19,block20,block21;
var block22, block23,block24;
var block25; 
var polygon,polygonImage;
var slingshot;

function preload(){
    polygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(700,height,1400,25);
    ground2 = new Ground(500,500,300,20);
    ground3 = new Ground(960,300,200,20);

    //level one blocks for 1st ground
    block1 = new Block(400, 472,30,40);
    block2 = new Block(430, 472,30,40);
    block3 = new Block(460, 472,30,40);
    block4 = new Block(490, 472,30,40);
    block5 = new Block(520, 472,30,40);
    block6 = new Block(550, 472,30,40);
    block7 = new Block(580, 472,30,40);
    
    //level two blocks for 1st ground
    block8 = new Block(430, 432,30,40);
    block9 = new Block(460, 432,30,40);
    block10 = new Block(490, 432,30,40);
    block11 = new Block(520, 432,30,40);
    block12 = new Block(550, 432,30,40);

    //level three blocks for 1st ground
    block13 = new Block(460, 392,30,40);
    block14 = new Block(490, 392,30,40);
    block15 = new Block(520, 392,30,40);
    
    //level four blocks for 1st ground
    block16 = new Block(490, 352,30,40);

    //level one blocks for 2nd ground
    block17 = new Block(900, 272,30,40);
    block18 = new Block(930, 272,30,40);
    block19 = new Block(960, 272,30,40);
    block20 = new Block(990, 272,30,40);
    block21 = new Block(1020, 272,30,40);    

    //level two blocks for 2nd ground
    block22 = new Block(930, 232,30,40);
    block23 = new Block(960, 232,30,40);
    block24 = new Block(990, 232,30,40);
  
    
    //level three blocks for 2nd ground
    block25 = new Block(960, 192,30,40);

    // creating polygon
    polygon = Bodies.circle(140,480,25);
    World.add(world,polygon);

    slingshot = new Slingshot(this.polygon,{x:140, y:480});
}

function draw(){
   
background(56,44,44);
      textSize(30);
      fill(255);
      text("Drag the Hexadecimal stone and Release it, to launch it towards the blocks", 100,50);
    Engine.update(engine);
    //strokeWeight(4);
   
    ground1.display();
    ground2.display();
    ground3.display();

    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("lightgreen");
    block13.display();
    block14.display();
    block15.display();

    fill("gray");  
    block16.display();

    fill("skyblue");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    
    fill("lightgreen");
    block22.display();
    block23.display();
    block24.display();
    
    fill("pink");
    block25.display();

    //displaynig polygon
    imageMode(CENTER);
    image(polygonImage, polygon.position.x,polygon.position.y, 40,40);    

    slingshot.display();

          
}

function mouseDragged(){
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(this.polygon, {x: 140 , y: 480});
 
       slingshot.attach(this.polygon);
    }
}
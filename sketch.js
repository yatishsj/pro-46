// var top= createSprite(200, 0,400,2);
// var bottom= createSprite(200, 400,400,2);
// var left = createSprite(0, 200,2,400);
// var right = createSprite(400, 200,2,400);

var letterN,letterS;
var blinky,cylde,inky,pinky;
var blinky1,cylde1,inky1,pinky1;
var pacman1,pacman;
var obstacle_1,obstacle_2,obstacle_3;
var obstacle1,obstacle2,obstacle3;


function preload(){
letterN = loadImage("Images/n_11.png");
letterS = loadImage("Images/s_1.png")

blinky = loadImage("Images/blinky.jpg");
 cylde = loadImage("Images/cylde.png");
  inky = loadImage("Images/inky.jpg");
 pinky = loadImage("Images/pinky.png");
pacman = loadImage("Images/pacman.jpg");

obstacle1 = loadImage("Obstacle/obstacleL1.png");
obstacle2 = loadImage("Obstacle/obstacleL2.png");
obstacle3 = loadImage("Obstacle/obstacleL3.png");

}

function setup(){
createCanvas (displayWidth,displayHeight);

var letterN_1 = createSprite(600,400,100,200);
letterN_1.addImage(letterN);
letterN_1.scale = 0.4;

var letterS_1 = createSprite(850,400,200,200);
letterS_1.addImage(letterS)
letterS_1.scale = 1.5;

block_1 = createSprite(738,503,147,2)
block_2 = createSprite(742,292,160,2)

var blinky1 = createSprite(200,100,200,200);
blinky1.addImage("blinky",blinky)
blinky1.scale = 0.06;

var cylde1 = createSprite(250,100,200,200);
cylde1.addImage("cylde",cylde)
cylde1.scale = 0.06;

var inky1 = createSprite(300,100,200,200);
inky1.addImage("inky",inky)
inky1.scale = 0.06;

var pinky1 = createSprite(350,100,200,200);
pinky1.addImage("pinky",pinky)
pinky1.scale = 0.2;

pacman1 = createSprite(400,100,200,200);
pacman1.addImage("pacman",pacman)
pacman1.scale = 0.05;
inky1.x=pacman1.x;



border_t = createSprite(200,0,12800,2);
border_t1 = createSprite(200,5,12800,2);

border_b = createSprite(200,719,12800,2);
border_b1 = createSprite(200,715,12800,2)

border_L = createSprite(0,700,1,12800);
border_L1 = createSprite(5,700,1,600);
border_L2 = createSprite(5,200,1,400)

border_R = createSprite(1279,0,1,12800);
border_R1 = createSprite(1274,0,1,700);
border_R2 = createSprite(1274,700,1,700);

obstacle_1 = createSprite(200,50,150,2);
obstacle_1.addImage(obstacle1);
obstacle_1.scale = 1.5;

obstacle_2 = createSprite(400,100,200,2);
obstacle_2.addImage(obstacle2)
obstacle_2.scale = 1.5;

obstacle_3 = createSprite(700,50,350,2);
obstacle_3.addImage(obstacle3)
obstacle_3.scale = 1.5;

edges=createEdgeSprites();



}


function draw() {
background("black");
  fill("orange");
  rect(450,300,50,210);
  rect.scale = 1 ;




  if(keyDown("up")){
    pacman1.velocityX = 0;
    pacman1.velocityY = -2;
  }
  
  if(keyDown("down")){
    pacman1.velocityX = 0;
    pacman1.velocityY = 2;
  }
  
  if(keyDown("left")){
    pacman1.velocityX = -2;
    pacman1.velocityY = 0;
  }
  
  if(keyDown("right")){
    pacman1.velocityX = 2;
    pacman1.velocityY = 0;
  }
  
  
  
  pacman1.bounceOff(edges[0]);
  pacman1.bounceOff(edges[1]);
  pacman1.bounceOff(edges[2]);
  pacman1.bounceOff(edges[3]);


  drawSprites();
  
  // inky.display();
  // pinky.display();
  // cylde.display();
  // blinky.display();
  // pacman.display();
  
}

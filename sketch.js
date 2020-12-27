
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();

  
}


function draw() {
 background(255);
  
 if(ground.x < 0) {
   ground.x = ground.width/2;
 }
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  score = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + score, 100, 50);
  
  
  bananas();
  obstacles();
  
  drawSprites();
  
  
}

function bananas() {
  if(frameCount % 80 === 0) {
    banana = createSprite(390, 200, 20, 20);
    banana.y = Math.round(random(120, 200));
   banana.addImage(bananaImage);
   banana.scale = 0.1;
    banana.velocityX = -3;
    
    banana.lifetime = 410;
    
    FoodGroup.add(banana);
  }
}

function obstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(390, 315, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
    
    obstacleImage.lifetime = 410;
  }
}







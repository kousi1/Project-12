var path, path_image, runner, runner_running   
function preload(){
  //pre-load images
path_image = loadImage ("path.png");
bomb_image = loadImage ("bomb.png");
coin_image = loadImage ("coin.png");
energyDrink_image = loadImage ("energyDrink.png");
path_image = loadImage ("path.png");
power_image = loadImage ("power.png");
runner_running = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(300,600);
  //create sprites here
  path = createSprite(150,200);
  path.addImage(path_image);
  path.velocityY = 4; 
  path.scale = 1.2;

  runner = createSprite(150,520);
  runner.addAnimation("running", runner_running);
 
  runner.scale = 0.1;

  invisibleBoundary1 = createSprite(400,400)

}



function draw() {
if(path.y > 400){
  path.y = height/2;
}

runner.x = World.mouseX;




drawSprites();

}

var tom,tomImage;
var jerry,jerryImage;
var garden,gardenImage;

function preload() {
    tomImage = loadAnimation("tomOne.png","tomTwo.png","tomThree.png","tomFour.png");
    jerryImage = loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png");
    gardenImage = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(200,200,40,80);
    garden.addImage("garden_being",gardenImage);
    
    jerry = createSprite(50,50,20,20);
    jerry.addAnimation("jerry_running",jerryImage);
    jerry.scale = 0.1;

    tom = createSprite(100,50,40,20):
    tom.addAnimation("tom_chasing",tomImage);
    tom.scale = 0.2;

}

function draw() {

    background(255);
    

    keyPressed();


    drawSprites();
}


function keyPressed(){
if(keyDown(LEFT_ARROW)){
    tom.velocityX = -5;
}
if(keyDown(RIGHT_ARROW)){
    tom.velocityX = +5;
}
if(keyDown(UP_ARROW)){
    tom.velocityY = -5;
}
if(keyDown(DOWN_ARROW)){
    tom.velocityY = +5;
}


}

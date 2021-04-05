var bgImg;
var cat;
function preload() {
    //load the images here
    bgImg = loadImage ("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png")
    catimg2 = loadAnimation("images/cat2","images/cat3","images/cat4");
    mouseimg2 = loadAnimation("images/mouse2","images/mouse3","images/mouse4")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        changeAnimation("mouse2")
        cat.velocityX=0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(key_Code===LEFT_ARROW){
mouse.addAnimation("mouse1",mouseimg2)
mouse.changeAnimation("mouse1");
mouse.frameDelay = 25;

  }
  if(key_Code===LEFT_ARROW){
    cat.addAnimation("cat2",catimg2)
    cat.changeAnimation("cat2");

  }}

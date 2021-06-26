var bg, tom, tomIng, jerryImg , jerry ,tomImg1,jerryImg1
var tomImg2,jerryImg2

function preload() {
    //load the images here
tomImg=loadAnimation("images/cat1.png")
tomImg1=loadAnimation("images/cat2.png","images/cat3.png")
jerryImg=loadAnimation("images/mouse1.png")
jerryImg1=loadAnimation("images/mouse2.png","images/mouse3.png")
bg=loadImage("images/garden.png")
tomImg2=loadAnimation("images/cat4.png")
jerryImg2=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600)
tom.addAnimation("tom",tomImg)
tom.scale=0.2

jerry=createSprite(200,600)
jerry.addAnimation("jerry",jerryImg)
jerry.scale=0.15

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX=0
    tom.addAnimation("tomanimation2",tomImg2)
    tom.x=300
    tom.changeAnimation("tomanimation2")

    jerry.addAnimation("jerryanimation2",jerryImg2)
    jerry.changeAnimation("jerryanimation2")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-3
    tom.addAnimation("tomanimation",tomImg1)
    tom.changeAnimation("tomanimation")

    jerry.addAnimation("jerryanimation",jerryImg1)
     jerry.frameDelay=25
    jerry.changeAnimation("jerryanimation")

    

}

}

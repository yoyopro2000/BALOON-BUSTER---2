var pinkball,greenball,redball,orangeball,blueball,yellowball;
var slingshot;
function preload(){
pink = loadImage("pinkball.png")
blue = loadImage("blueball.png")
green = loadImage("greenball.png")
orange = loadImage("orangeball.png")
red = loadImage("redball.png")
yellow = loadImage("Yellowball.png")
}
function setup(){
createCanvas(1700,700)
for(var i = 25; i<1700; i = i + 50){
 pinkball = createSprite(i,15,30,35)
 pinkball.addImage(pink)
 pinkball.scale = 0.05
}
for(var i = 25; i<1700; i = i + 50){
 greenball = createSprite(i,55,30,30)
 greenball.addImage(green)
 greenball.scale = 0.05
}
for(var i = 25; i<1700; i = i + 50){
 redball = createSprite(i,95,30,30)
 redball.addImage(red)
 redball.scale = 0.12
}
   for(var i = 25; i<1700; i = i + 50){
  orangeball = createSprite(i,135,30,30)
  orangeball.addImage(orange)
  orangeball.scale = 0.12
} 
   for(var i = 25; i<1700; i = i + 50){
  blueball = createSprite(i,175,30,30)
  blueball.addImage(blue)
  blueball.scale = 0.065
}
   for(var i = 25; i<1700; i = i + 50){
  yellowball = createSprite(i,215,30,30)
  yellowball.addImage(yellow)
  yellowball.scale = 0.065
}
for(var i = 25; i<1700; i = i + 50){
  pinkball = createSprite(i,255,30,35)
  pinkball.addImage(pink)
  pinkball.scale = 0.05
 }
 for(var i = 25; i<1700; i = i + 50){
  greenball = createSprite(i,295,30,30)
  greenball.addImage(green)
  greenball.scale = 0.05
 }
 for(var i = 25; i<1700; i = i + 50){
  redball = createSprite(i,335,30,30)
  redball.addImage(red)
  redball.scale = 0.12
 }
    for(var i = 25; i<1700; i = i + 50){
   orangeball = createSprite(i,375,30,30)
   orangeball.addImage(orange)
   orangeball.scale = 0.12
 } 
    for(var i = 25; i<1700; i = i + 50){
   blueball = createSprite(i,415,30,30)
   blueball.addImage(blue)
   blueball.scale = 0.065
 }
    for(var i = 25; i<1700; i = i + 50){
   yellowball = createSprite(i,455,30,30)
   yellowball.addImage(yellow)
   yellowball.scale = 0.065
 }
}
function draw(){
 background("yellow")  
 drawSprites();
}


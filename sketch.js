const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var world,engine
var database,firebabse
var body1
var form
function setup(){
  
createCanvas(windowWidth,windowHeight)
engine=Engine.create()
  world=engine.world
database=firebase.database()
body1=new Pillar(100,400,windowWidth/2,windowHeight/2)

}


function draw(){
  Engine.update(engine)
background(0)

body1.display()
}
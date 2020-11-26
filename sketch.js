const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld,box1,box2,ground,pig1,log1,box3,box4,pig2,log2,box5,log3,log4,bird,backgroundImg;

function preload(){
  backgroundImg = loadImage("sprites/bg.png")
}

function setup() {
  var canvas = createCanvas(800,400);
  myengine = Engine.create();
  myworld = myengine.world;
  box1 = new Box(640,330,70,70);
  box2 = new Box(400,330,70,70)
  ground = new Ground(400,390,800,20)
  pig1 = new Pig(520,330)
  log1 = new Log(520,295,320,PI/2)
  box3 = new Box(640,260,70,70)
  box4 = new Box(400,260,70,70)
  pig2 = new Pig(520,260)
  log2 = new Log(520,225,320,PI/2)
  box5 = new Box(520,190,70,70)
  log3 = new Log(420,190,150,PI/7)
  log4 = new Log(610,190,150,-PI/7)
  bird = new Bird(200,100)
}

function draw() {
  background(backgroundImg);
  Engine.update(myengine)
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
}
const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
var engine,world,box1,ground1,pig1; 

function setup(){ 
  createCanvas(400,400); 
  engine = Engine.create(); 
  world = engine.world; 
  box1 = new box(230, 200, 30, 30);
  box2 = new box(330, 200, 30, 30);
  box3 = new box(230, 140, 30, 30);
  box4 = new box(330, 140, 30, 30);
  box5 = new box(280, 70, 30, 30);
  ground1 = new ground(200, 400, 400, 5);
  pig1 = new Pig(280, 200);
  pig2 = new Pig(280, 150);
  bird1 = new bird(50, 50);
  log1 = new log(280, 170, 160, PI/2);
  log2 = new log(280, 110, 160, PI/2);
  
  

  } 
  
  function draw(){ 
    background("blue"); 
    Engine.update(engine);
    box1.display() 
    box2.display()
    ground1.display()
    pig1.display()
    bird1.display()
    log1.display()
    box3.display()
    box4.display()
    pig2.display()
    log2.display()
    box5.display()

  }
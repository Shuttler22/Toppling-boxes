const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,390,50,50);
    box2 = new Box(250,100,50,50);
    box3 = new Box(200,150,50,50);
    box4 = new Box(250,250,50,50);
    box5 = new Box(225,20,50,50);
    ground0 = new ground(200, 390, 400, 20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground0.display();
   
}
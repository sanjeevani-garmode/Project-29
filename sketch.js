const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon_img;

function preload() {
    polygon_img=loadImage("polygon.png");
}

function setup() {
    engine = engine.create();
    world = engine, world;

createCanvas(400, 900);

ground = new Ground();
stand1 = new Stand(380, 300, 270, 10);
stand2 = new Stand(700, 200, 200, 10);

//set one
//level one
block1 = new Block(270, 280, 30, 20);
block2 = new Block(300, 280, 30, 20);
block3 = new Block(330, 280, 30, 20);
block4 = new Block(360, 280, 30, 20);
block5 = new Block(390, 280, 30, 20);
block6 = new Block(420, 280, 30, 20);
block7 = new Block(450, 280, 30, 20);

//level two
block8 = new Block(260, 240, 30, 20);
block9 = new Block(230, 240, 30, 20);
block10 = new Block(200, 240, 30, 20);
block11 = new Block(170, 240, 30, 20);
block12 = new Block(140, 240, 30, 20);

//level three
block13 = new Block(130, 200, 30, 20);
block14 = new Block(100, 200, 30, 20);
block15 = new Block(70, 200, 30, 20);

//top
block16 = new Block(60, 160, 30, 20);

//set two
//level one
block1 = new Block(640, 240, 30, 20);
block2 = new Block(670, 240, 30, 20);
block3 = new Block(700, 240, 30, 20);
block4 = new Block(740, 240, 30, 20);
block5 = new Block(770, 240, 30, 20);

//level two
block6 = new Block(630, 280, 30, 20);
block7 = new Block(660, 280, 30, 20);
block8 = new Block(690, 280, 30, 20);

//top
block9 = new Block(60, 160, 30, 20);









}


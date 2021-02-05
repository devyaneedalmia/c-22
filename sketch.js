const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var object;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,350,200,20,object_options);
    World.add(myWorld,object);


    var ball_options ={
        restitution: 1
    }

    ball=Bodies.circle(200,50,25,ball_options);
    World.add(myWorld,ball);

   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(myEngine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,200,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,25,25);
}

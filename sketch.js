const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Constraint = Matter.Constraint;

var engine, world;
var d1,d2,d3,d4,d5,d6,dd
var plinko
var plinkos = [];
var particles = [];
var particle;


function preload () {

    
}

function setup(){
    var canvas = createCanvas(500,600);
    engine = Engine.create();
    world = engine.world;

   
    
    

    dd = new ground(240,590,550,20)
    d1 = new ground(5,500,10,160)
    d2 = new ground(100,500,10,160)
    d3 = new ground(200,500,10,160)
    d4 = new ground(300,500,10,160)
    d5 = new ground(400,500,10,160)
    d6 = new ground(493,500,10,160)
    
    for(i = 20 ; i <= width ; i=i+50)
    {
    plinkos.push( new Plinko (i,75,10,10))
    
    }
    
    for(i = 20 ; i <= width ; i=i+50)
    {
    plinkos.push( new Plinko (i,125,10,10))
    
    }
    
    for(i =20 ; i <= width ; i=i+50)
    {
    plinkos.push( new Plinko (i,175,10,10))
    
    }
    
    for(i =20 ; i <= width ; i=i+50)
    {
    plinkos.push( new Plinko (i,225,10,10))
    
    }
    
    for(i = 20 ; i <= width ; i=i+50)
    {
    plinkos.push( new Plinko (i,275,10,10))
    
    }
    
   


}

function draw(){
    background("lime");
    Engine.update(engine);
    dd.display();
    



for (var i=0; i<plinkos.length ; i++){
plinkos[i].display();
}



if(frameCount%60===0){
    particles.push(new BALL(random(20,450),10,10))
    

    }

    


    for (var j = 0; j < particles.length; j++){
        particles[j].display();
    }
   
    
d1.display();
d2.display();
d3.display();
d4.display();
d5.display();
d6.display();



}



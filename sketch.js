var array1 = [1,3,5,7,3];
console.log(array1)

console.log(array1[1])
array1.push("aayush")
console.log(array1)

array1.pop();
console.log(array1)

var array2=[    ["Kirti",3]    ,      ["aayush",5,7]    ]
console.log(array2[1][2])


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(230,100,50,100);
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
}
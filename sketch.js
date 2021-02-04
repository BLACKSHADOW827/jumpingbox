var canvas;
var music;
var box,box1,box2,box3
var edges
function preload(){
    
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);
box = createSprite(50,590,200,10)
box1 = createSprite(260,590,200,10)
box2 = createSprite(470,590,200,10)
box4 = createSprite(680,590,200,10)

ball = createSprite(random(25,750))


    //create 4 different surfaces
    box2.shapeColor=rgb(255,128,0)
    box1.shapeColor=rgb(255,0,0)  
    box4.shapeColor=rgb(0,225,0)  
    box.shapeColor=rgb(0,0,225) 

   
   



ball.velocityY=4
ball.velocityX=4
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges = createEdgeSprites();
   ball.bounceOff(edges)

    
    if(ball.isTouching(box) && ball.bounceOff(box)) {
        ball.shapeColor=rgb(0,0,225) 
        music.play();
    }
    if(ball.isTouching(box2)&& ball.collide(box2)) {
        ball.shapeColor=rgb(255,128,0)
        ball.velocityX=0
        ball.velocityY=0
    }
        
        if(ball.isTouching(box1) && ball.bounceOff(box1)) {
            ball.shapeColor=rgb(255,0,0) 
            music.play()
           

        } 
           
            if(ball.isTouching(box4) && ball.bounceOff(box4)) {
                ball.shapeColor=rgb(0,225,0) 
                music.play();
               
 
            }
           
            
            


    drawSprites();
    //add condition to check if box touching surface and make it box
}


/*
function setup(){

createCanvas(800, 600); //the numbers mean the length of the x and y
background(200);


createCanvas(300, 300) //this is how you create a canvas to draw on
background(0)

rect(100, 150, 100, 50)//

}


function setup() {
 arc(a, b, c, d, start, stop, [mode])   
}
*/

//explain all of the follow code with notes

var r,radius; //defining a function, in this the radius of the circle

function setup() {
    createCanvas(300, 300);
    background(100,100,100)
    radius = 0; //radius start value 0
    r=600;
}


function draw() {
    radius++; //adds one to the radius each time point
    fill(255);
    stroke(100, 100, 100)
    if(radius<300){
        ellipse(150,150,radius);
    }
    else if(radius>=300){
     //   radius=300;
    //fill(100,100,100)
     ellipse(150,150,r-radius);
     if(radius>=600){
         radius=0
     }
    }
}
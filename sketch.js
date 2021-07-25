var r=0
var g=0
var b=0
function setup() {
  createCanvas(400,400);
  btn_red = createButton('Down Arrow for Red');
  btn_red.position(100,50);

  btn_green = createButton('Up Arrow for Green');
  btn_green.position(250,50);
}

function draw() 
{
  background("white");

  if (keyDown(DOWN_ARROW)){
    background('red')
  } 
  
  if (keyDown(UP_ARROW)){
    background('green')
  }
}






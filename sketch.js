var hr, mn, sc;
var hourAngle, minuteAngle, secondAngle;

function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  translate(200,200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();
  secondAngle = map(sc, 0,60,0,360);
  minuteAngle = map(mn, 0,60,0,360);
  hourAngle = map(hr % 12,0,12,0,360);
  //drawing second hand
  push();
  rotate(secondAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
  //drawing minute hand.
  push();
  rotate(minuteAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();
  //drawing hour hand.
  push();
  rotate(hourAngle);
  stroke("green");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();  
  //drawing a point.
  stroke("white");  
  point(0,0);
  //drawingArc.  
  strokeWeight(10);
  noFill();
  stroke("red");
  arc(0, 0, 300, 300, 0, secondAngle);
  stroke("blue");
  arc(0, 0, 280, 280, 0, minuteAngle);
  stroke("green");
  arc(0 , 0, 260, 260, 0, hourAngle);
  drawSprites();
}
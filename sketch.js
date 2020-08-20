var hr,mn,sc,cl;
hr = hour();
mn = minute();
sc = second();
cl = clock();
var clAngle,scAngle;

function setup() {
  createCanvas(400,500);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

  hour();
  minute();
  second();
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  stroke (255,0,0);
  strokeWeight (7);
  line (0,0,100,0);
  translate (0,0);


  clAngle = map(cl,200,3000,0,360);
  stroke (0,0,139);
  strokeWeight (7);
  line (0,0,100,0);
  translate (0,0);



//clAngle.display();
//scAngle.display();
  drawSprites();
}

function update (){
  update = update.ref.update();
}

function hour (){
hr.update ();
}
function minute (){
mn.update();
}
function second (){
sc.update();
}
function clock (){
  cl.update();
}
var img;
var s = 5;
var alpha = 255;
function preload() {
  img = loadImage("bridge.jpg");
}
function setup() {
	createCanvas(1041, 586);
}

function mousePressed(){
	alpha = 255 - (255*(mouseX/width));
	s = (100 * (mouseX/width)) + 5;
}

function draw() {
	var x = random(width);
	var y = random(height)
	c = img.get(x, y);
	c[3] = alpha;
	fill(c);
	noStroke();
  	ellipse(x, y, s, s);
}
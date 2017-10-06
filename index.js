var img;
function preload() {
  img = loadImage("bridge.jpg");
}
function setup() {
	createCanvas(1041, 586)
  	//image(img, 0, 0);
}
var size = 100;
function draw() {
	var x = random(width);
	var y = random(height)
	var c = img.get(x, y);
	c[3] = 255 - (255*(mouseX/width));
	//c[3] = 0;
	size = (100 * (mouseX/width)) + 5;
	fill(c);
	noStroke();
  	ellipse(x, y, size, size);
}
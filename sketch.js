//Author: Kirill Dimitrov
//Date: 10/10/2026
//Purpose: To create an interactive scene using multiple functions

let cloudX = 0;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  // Sky
  background(135, 206, 235);

  // Grass
  fill(80, 180, 80);
  rect(0, 350, 800, 150);

  drawSun();
  drawTree(150, 350);
  drawTree(650, 350);
  drawHouse(325, 300);
  drawCloud(cloudX, 100);

  // Move cloud
  cloudX = cloudX + 2;

  // Move cloud back to start
  if (cloudX > width + 100) {
    cloudX = -100;
  }
}

function drawSun() {
  fill("yellow");
  noStroke();
  circle(700, 80, 100);
}

function drawTree(x, y) {
  // Trunk
  fill(120, 70, 30);
  noStroke();
  rect(x - 15, y - 100, 30, 100);

  // Leaves
  fill("green");
  circle(x, y - 130, 100);
}

function drawHouse(x, y) {
  stroke(0);

  // Walls
  fill(210, 160, 100);
  rect(x, y, 150, 100);

  // Roof
  fill(150, 50, 50);
  triangle(
    x, y,
    x + 75, y - 75,
    x + 150, y
  );

  // Door
  fill(100, 50, 20);
  rect(x + 60, y + 50, 30, 50);

  // Windows
  fill(100, 200, 255);
  rect(x + 20, y + 25, 30, 30);
  rect(x + 100, y + 25, 30, 30);

  // White crosses on windows
  stroke(255);

  line(x + 35, y + 25, x + 35, y + 55);
  line(x + 20, y + 40, x + 50, y + 40);

  line(x + 115, y + 25, x + 115, y + 55);
  line(x + 100, y + 40, x + 130, y + 40);

  noStroke();
}

function drawCloud(x, y) {
  fill(255);
  noStroke();

  circle(x, y, 60);
  circle(x + 40, y, 80);
  circle(x + 80, y, 60);
}
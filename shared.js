// ============================================================
// shared.js — Shared drawing helpers
// Getting Over It: The Inner Mountain
// ============================================================


let bg0, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10;


function preload() {
  bg0 = loadImage("assets/images/bg0.jpg");
  bg1 = loadImage("assets/images/bg1.jpg");
  bg2 = loadImage("assets/images/bg2.jpg");
  bg3 = loadImage("assets/images/bg3.jpg");
  bg4 = loadImage("assets/images/bg4.jpg");
  bg5 = loadImage("assets/images/bg5.jpg");
  bg6 = loadImage("assets/images/bg6.jpg");
  bg7 = loadImage("assets/images/bg7.jpg");
  bg8 = loadImage("assets/images/bg8.jpg");
  bg9 = loadImage("assets/images/bg9.jpg");
  bg10 = loadImage("assets/images/bg10.jpg");
}

// ------------------------------------------------------------
// drawBackground()
// Dark rocky mountain night sky, drawn every frame.
// ------------------------------------------------------------
function drawBackground() {
  background(12, 10, 18);

  // Subtle stars
  noStroke();
  randomSeed(42);
  for (let i = 0; i < 80; i++) {
    let sx = random(width);
    let sy = random(height * 0.6);
    let brightness = 120 + sin(starT + i * 0.7) * 40;
    fill(brightness, brightness, brightness + 30, 180);
    ellipse(sx, sy, random(1, 2.5));
  }
}

// ------------------------------------------------------------
// drawPotMan(x, y, size, col, t)
// Draws Bennett Foddy's protagonist — a man in a pot.
// t is used for subtle wobble animation.
// ------------------------------------------------------------

function drawPotMan(x, y, s, col) {
  push();

  col = col || color(70, 50, 30);

  // Pot
  fill(col);
  stroke(40);
  arc(x, y + s * 0.6, s * 1.2, s * 0.9, 0, PI);
  rect(x - s * 0.55, y + s * 0.2, s * 1.1, s * 0.4);

  // Body + head
  noStroke();
  fill(200, 160, 100);
  ellipse(x, y - s * 0.05, s * 0.5, s * 0.7);
  ellipse(x, y - s * 0.55, s * 0.4);

  // Eye
  fill(30);
  ellipse(x + s * 0.05, y - s * 0.55, s * 0.06);

  // Hammer (fixed)
  let a = -0.5;
  let ex = x + cos(a) * s * 0.7;
  let ey = y - s * 0.1 + sin(a) * s * 0.5;

  stroke(150, 100, 50);
  line(x, y - s * 0.1, ex, ey);

  noStroke();
  fill(90, 90, 110);
  rect(ex - s * 0.05, ey - s * 0.2, s * 0.1, s * 0.25);

  pop()
}

// ------------------------------------------------------------
// drawButton(x, y, w, h, label, isHovered)
// Styled button matching the game's rocky aesthetic.
// ------------------------------------------------------------
function drawButton(x, y, w, h, label, isHovered) {
  push();
  rectMode(CENTER);

  // Shadow
  fill(0, 0, 0, 80);
  noStroke();
  rect(x + 3, y + 3, w, h, 6);

  // Button body
  if (isHovered) {
    fill(180, 100, 30);
    stroke(230, 160, 60);
  } else {
    fill(55, 40, 20);
    stroke(100, 75, 40);
  }
  strokeWeight(2);
  rect(x, y, w, h, 6);

  // Inner line detail
  if (isHovered) {
    stroke(255, 200, 100, 80);
  } else {
    stroke(80, 60, 30, 80);
  }
  strokeWeight(1);
  rect(x, y, w - 6, h - 6, 4);

  // Label
  fill(isHovered ? color(255, 240, 200) : color(200, 175, 130));
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(15);
  text(label, x, y);

  pop();
}

// ------------------------------------------------------------
// isMouseOver(x, y, w, h)
// Returns true if mouse is inside the rectangle.
// ------------------------------------------------------------
function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}

// ------------------------------------------------------------
// drawTitle(txt, y, sz, col)
// Draws a scene title with a subtle glow.
// ------------------------------------------------------------
function drawTitle(txt, y, sz, col) {
  push();
  textAlign(CENTER);
  noStroke();

  // Glow layer
  fill(col ? red(col) : 200, col ? green(col) : 140, col ? blue(col) : 50, 40);
  textSize(sz + 4);
  text(txt, width / 2 + 2, y + 2);

  // Main text
  fill(col || color(230, 180, 60));
  textSize(sz);
  text(txt, width / 2, y);

  pop();
}

// ------------------------------------------------------------
// drawNarrativeBox(lines, y)
// Draws a semi-transparent box with narrative text.
// lines: array of strings
// ------------------------------------------------------------
function drawNarrativeBox(lines, y) {
  push();
  let boxH = lines.length * 22 + 20;
  let boxW = 560;
  let bx = width / 2;
  let by = y + boxH / 2;

  // Box background
  fill(8, 6, 14, 200);
  stroke(60, 50, 30);
  strokeWeight(1);
  rectMode(CENTER);
  rect(bx, by, boxW, boxH, 6);

  // Text
  fill(185, 165, 120);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13.5);
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], bx, y + 10 + i * 22);
  }

  pop();
}
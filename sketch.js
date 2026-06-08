// ============================================================
// sketch.js — Getting Over It: The Inner Mountain
// Choose Your Own Adventure
// ============================================================

let scenes = [];
let sceneClicks = [];
let currentScene = 0;

// Animation timers
let blobT = 0;
let starT = 0;
let potManT = 0;

// Button layout constants
const BTN_W = 220;
const BTN_H = 52;
const BTN_Y = 390;

function setup() {
  createCanvas(800, 450);
  textFont("monospace");
}

function draw() {
  drawBackground();

  if (scenes[currentScene]) {
    scenes[currentScene]();
  } else {
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("Scene " + currentScene + " not found", width / 2, height / 2);
  }

  blobT += 0.012;
  starT += 0.008;
  potManT += 0.02;
}

function mousePressed() {
  if (sceneClicks[currentScene]) {
    sceneClicks[currentScene]();
  }
}

function goToScene(n) {
  currentScene = n;
}
// ============================================================
// scene0.js — Opening Scene: Base of the Mountain
// ============================================================
// The player begins at the foot of a vast, impossible mountain.
// Two paths diverge. Choice: Left Face or Right Face.
// ============================================================


scenes[0] = function () {

  image(bg0, 0, 0, width, height);

  // Player (pot man) at base
  drawPotMan(400, 340, 65, null, potManT);

  // Title
  drawTitle("The climb to the top", 65, 36, color(230, 180, 60));

  // Subtitle
  push();
  fill(140, 120, 80);
  textAlign(CENTER);
  textSize(13);
  noStroke();
  text("A story of climbing. Of falling. Of trying again.", width / 2, 105);
  pop();

  // Narrative
  drawNarrativeBox(
    [
      "Sitting at the bottom of the mountain, the summit is impossibly far.",
      "The summit is impossibly far. Gravity is unforgiving.",
      "Every decision matters. Every swing of the hammer could be your last.",
      "Time to start climbing...",
    ],
    150
  );

  // Buttons
  drawButton(
    230,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Climb the Left Face",
    isMouseOver(230, BTN_Y, BTN_W, BTN_H)
  );
  drawButton(
    570,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Climb the Right Face",
    isMouseOver(570, BTN_Y, BTN_W, BTN_H)
  );
};

sceneClicks[0] = function () {
  if (isMouseOver(230, BTN_Y, BTN_W, BTN_H)) goToScene(1);
  if (isMouseOver(570, BTN_Y, BTN_W, BTN_H)) goToScene(2);
};
// ============================================================
// scene2.js — Level 2B: The Devil's Chimney (Right Face)
// ============================================================

scenes[2] = function () {
  image(bg2, 0, 0, width, height);

  // Pot man in chimney center
  drawPotMan(400, 300, 58, null, potManT);

  // Title
  drawTitle("DEVIL'S CHIMNEY", 70, 30, color("black"));

  // Narrative
  drawNarrativeBox(
    [
      "The chimney narrows. Lava boils far below.",
      "Your hammer scrapes stone. The walls bleed heat.",
      "One slip and you'll fall into the abyss.",
      "Which path will take to you the top?.",
    ],
    120
  );

  // Buttons
  drawButton(
    230,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Swing Wide",
    isMouseOver(230, BTN_Y, BTN_W, BTN_H)
  );
  drawButton(
    570,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Hug the Wall",
    isMouseOver(570, BTN_Y, BTN_W, BTN_H)
  );
};

sceneClicks[2] = function () {
  if (isMouseOver(230, BTN_Y, BTN_W, BTN_H)) goToScene(5);
  if (isMouseOver(570, BTN_Y, BTN_W, BTN_H)) goToScene(6);
};
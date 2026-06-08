// ============================================================
// scene1.js — Level 2A: The Bamboo Forest (Left Face)
// ============================================================


scenes[1] = function () {
  image(bg1, 0, 0, width, height);
  
  drawPotMan(400, 290, 60, null, potManT);

  // Title
  drawTitle("THE BAMBOO FOREST", 45, 30, color(120, 200, 80));

  // Narrow narrative
  drawNarrativeBox(
    [
      "The bamboo closes in around you like a cage.",
      "Your hammer clicks against hollow stalks.",
      "One wrong swing and you tumble back to the valley.",
      "What is your next move?",
    ],
    130
  );
  // Buttons
  drawButton(
    230,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Use Momentum",
    isMouseOver(230, BTN_Y, BTN_W, BTN_H)
  );
  drawButton(
    570,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Take It Slow",
    isMouseOver(570, BTN_Y, BTN_W, BTN_H)
  );
};

sceneClicks[1] = function () {
  if (isMouseOver(230, BTN_Y, BTN_W, BTN_H)) goToScene(3);
  if (isMouseOver(570, BTN_Y, BTN_W, BTN_H)) goToScene(4);
};
// ============================================================
// scene5.js — Level 3D: The Obsidian Shelf
// Path: Right Face → Swing Wide
// ============================================================

scenes[5] = function () {
  image(bg5, 0, 0, width, height);

  // Pot man
  drawPotMan(380, 233, 58, null, potManT);

  drawTitle("THE OBSIDIAN SHELF", 38, 28, color(160, 100, 255));

  drawNarrativeBox(
    [
      "You encounter a raven, perched on a ledge.",
      "It circles around you, then lands on a narrow path to the right.",
      "The path is steep and treacherous, but it leads to the end.",
      "of the summit or your doom.",
    ],
    130
  );

  drawButton(
    230,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Climb to summit",
    isMouseOver(230, BTN_Y, BTN_W, BTN_H)
  );
  drawButton(
    570,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Follow raven",
    isMouseOver(570, BTN_Y, BTN_W, BTN_H)
  );
};

sceneClicks[5] = function () {
  if (isMouseOver(230, BTN_Y, BTN_W, BTN_H)) goToScene(13);
  if (isMouseOver(570, BTN_Y, BTN_W, BTN_H)) goToScene(12);
};
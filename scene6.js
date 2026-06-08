// ============================================================
// scene6.js — Level 3D: The Obsidian Shelf
// Path: Right Face → Hug the Wall
// ============================================================

scenes[6] = function () {
  image(bg6, 0, 0, width, height);
  
  drawPotMan(380, 233, 58, null, potManT);

  drawTitle("THE OBSIDIAN SHELF", 38, 28, color(160, 100, 255));

  drawNarrativeBox(
    [
      "The wall hid a secret: a shelf of pure black obsidian.",
      "Ancient carvings pulse with violet light.",
      "Two paths lead higher — one built by human hands,",
      "one grown from impossible ice.",
    ],
    130
  );

  drawButton(
    230,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Take the Staircase",
    isMouseOver(230, BTN_Y, BTN_W, BTN_H)
  );
  drawButton(
    570,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Climb the Ice Pillar",
    isMouseOver(570, BTN_Y, BTN_W, BTN_H)
  );
};

sceneClicks[6] = function () {
  if (isMouseOver(230, BTN_Y, BTN_W, BTN_H)) goToScene(13);
  if (isMouseOver(570, BTN_Y, BTN_W, BTN_H)) goToScene(14);
};
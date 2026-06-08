// ============================================================
// scene4.js — Level 3B: The Canopy Crossing
// Path: Left Face → Take It Slow
// ============================================================

scenes[4] = function () {

  image(bg4, 0, 0, width, height);
  // Pot man on left platform, looking across
  drawPotMan(130, 272, 58, null, potManT * 0.5);

  drawTitle("THE CANOPY CROSSING", 42, 28, color(100, 200, 80));

  drawNarrativeBox(
    [
      "Patience is a virtue. You wait, watching the fog swirl and shift.",
      "A gap opens in the canopy — and in the path.",
      "Fog floods the space between here and there.",
      "You can make it across.",
    ],
    135
  );

  drawButton(
    230,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Trust Your Memory",
    isMouseOver(230, BTN_Y, BTN_W, BTN_H)
  );
  drawButton(
    570,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Wait for Fog to Clear",
    isMouseOver(570, BTN_Y, BTN_W, BTN_H)
  );
};

sceneClicks[4] = function () {
  if (isMouseOver(230, BTN_Y, BTN_W, BTN_H)) goToScene(9);
  if (isMouseOver(570, BTN_Y, BTN_W, BTN_H)) goToScene(10);
};
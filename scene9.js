// ============================================================
// scene9.js — Ending 3: THE BLIND CROSSING
// Path: Left → Slow → Trust Memory
// ============================================================

scenes[9] = function () {
  image(bg8, 0, 0, width, height);

  drawPotMan(400, 300, 65, color(80, 150, 200), potManT * 0.7);

  drawTitle("THE BLIND CROSSING", 42, 32, color(60, 100, 160));

  drawNarrativeBox(
    [
      "You didn't look. You just moved — from memory, from trust.",
      "Your hammer connected with the platform perfectly.",
      "Above the fog, the world is impossibly quiet.",
      '"Patience taught you more than sight ever could."',
    ],
    338
  );

  drawButton(
    400,
    BTN_Y + 10,
    220,
    BTN_H,
    "Play Again",
    isMouseOver(400, BTN_Y + 10, 220, BTN_H)
  );
};

sceneClicks[9] = function () {
  if (isMouseOver(400, BTN_Y + 10, 220, BTN_H)) goToScene(0);
};
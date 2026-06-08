// ============================================================
// scene7.js — Ending 1: THE SUMMIT GRASP
// Path: Left → Momentum → Reach for the Ledge
// ============================================================

scenes[7] = function () {
  image(bg7, 0, 0, width, height);
  
  drawPotMan(415, 248, 68, color(100, 190, 80), potManT * 1.5);

  drawTitle("THE SUMMIT GRASP", 50, 34, color(255, 230, 80));

  drawNarrativeBox(
    [
      "Your hammer finds stone. Your arms find strength.",
      "You grasp the ledge and pull yourself up.",
      "The summit is within reach. You are nearing the end.",
      '"You did it. Not despite the fall — because of it."',
    ],
    330
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

sceneClicks[7] = function () {
  if (isMouseOver(400, BTN_Y + 10, 220, BTN_H)) goToScene(0);
};
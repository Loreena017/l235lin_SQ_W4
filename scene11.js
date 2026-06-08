// ============================================================
// scene11.js — Ending 5: THE GOLDEN SUMMIT
// Path: Right → Swing Wide → Climb to Summit
// ============================================================

scenes[11] = function () {

  image(bg7, 0, 0, width, height);
  // Pot man triumphant at summit
  drawPotMan(400, 190, 70, color(255, 200, 60), potManT * 1.2);

  drawTitle("THE GOLDEN SUMMIT", 50, 36, color(255, 255, 160));

  drawNarrativeBox(
    [
      "No hesitation. No detours. Just the destination in sight.",
      "You've made it this far, there is no going back now.",
      "The valley below reminds you of how far you've come.",
      '"There is no room for mistake."',
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

sceneClicks[11] = function () {
  if (isMouseOver(400, BTN_Y + 10, 220, BTN_H)) goToScene(0);
};
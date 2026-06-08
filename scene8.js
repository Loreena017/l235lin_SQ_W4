// ============================================================
// scene8.js — Ending 2: THE GREAT RESET
// Path: Left → Momentum → Let Go and Fly
// ============================================================

scenes[8] = function () {
  image(bg0, 0, 0, width, height);

  drawPotMan(width / 2, 200, 65, color(180, 80, 40), potManT * 2);

  // Dramatic title
  drawTitle("STARTED FROM THE BOTTOM", 48, 34, color(200, 80, 80));

  drawNarrativeBox(
    [
      "You let go. The sky embraced you — briefly.",
      "Then the mountain took you back. All the way back.",
      "You land exactly where you started, unharmed,",
      '"its as if the universe gave you another chance."',
    ],
    300
  );

  drawButton(
    400,
    BTN_Y + 10,
    220,
    BTN_H,
    "Try Again",
    isMouseOver(400, BTN_Y + 10, 220, BTN_H)
  );
};

sceneClicks[8] = function () {
  if (isMouseOver(400, BTN_Y + 10, 220, BTN_H)) goToScene(0);
};
// ============================================================
// scene12.js — Ending 6: THE RAVEN'S SECRET
// Path: Right → Swing Wide → Follow the Raven
// ============================================================

scenes[12] = function () {

  image(bg8, 0, 0, width, height);
  drawPotMan(width/2, 200, 58, color(120, 90, 180), potManT * 0.5);

  drawTitle("THE RAVEN'S SECRET", 48, 32, color(190, 130, 255));

  drawNarrativeBox(
    [
      "The raven landed on a ledge the maps don't show.",
      "A shrine. A small ceramic cup, still warm.",
      "This was not your intended destination.",
      '"but an end to your journey."',
    ],
    355
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

sceneClicks[12] = function () {
  if (isMouseOver(400, BTN_Y + 10, 220, BTN_H)) goToScene(0);
};
// ============================================================
// scene10.js — Ending 4: THE PATIENT HERMIT
// Path: Left → Slow → Wait for Fog to Clear
// ============================================================

scenes[10] = function () {

  image(bg8, 0, 0, width, height);

  drawPotMan(width/2, 200, 62, color(140, 190, 90), 0); // static pose (t=0)


  drawTitle("THE PATIENT HERMIT", 42, 32, color(200, 160, 60));

  drawNarrativeBox(
    [
      "You waited. The fog cleared — slowly, then all at once.",
      "There was never a gap. Only the idea of one.",
      "The bamboo bridge had been there all along.",
      '"The mountain rewards those who do not rush."',
    ],
    250
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

sceneClicks[10] = function () {
  if (isMouseOver(400, BTN_Y + 10, 220, BTN_H)) goToScene(0);
};
// ============================================================
// scene14.js — Ending 8: AN ICY FALL
// Path: Right → Hug Wall → Climb the Ice Pillar
// ============================================================

scenes[14] = function () {
  image(bg9, 0, 0, width, height);
  
  drawPotMan(380, 200, 58, null, potManT);

  drawTitle("AN ICY FALL", 42, 32, color("black"));

  drawNarrativeBox(
    [
      "The pillar carried you higher than the summit itself.",
      "Then — crack. A slow, cold slide back to earth.",
      "But for one moment you saw a city in the clouds.",
      '"The fall was worth it. Not everyone gets that view."',
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

sceneClicks[14] = function () {
  if (isMouseOver(400, BTN_Y + 10, 220, BTN_H)) goToScene(0);
};
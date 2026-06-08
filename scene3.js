// ============================================================
// scene3.js — Level 3A: The Catapult Moment
// path: Left Face → Use Momentum
// ============================================================

scenes[3] = function () {
  image(bg3, 0, 0, width, height);

  drawPotMan(width / 2, 300, 60, null, potManT);


  drawTitle("THE CATAPULT MOMENT", 40, 28, color(150, 240, 100));

  drawNarrativeBox(
    [
      "You swing harder. Faster. The bamboo bends beneath you.",
      "Physics takes over. You're launched into cold air.",
      "A rocky ledge glints to the right. Clouds swirl below.",
      "What do you do as you arc through the sky?",
    ],
    148
  );

  drawButton(
    230,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Reach for the Ledge",
    isMouseOver(230, BTN_Y, BTN_W, BTN_H)
  );
  drawButton(
    570,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Let Go and Fly",
    isMouseOver(570, BTN_Y, BTN_W, BTN_H)
  );
};

sceneClicks[3] = function () {
  if (isMouseOver(230, BTN_Y, BTN_W, BTN_H)) goToScene(7);
  if (isMouseOver(570, BTN_Y, BTN_W, BTN_H)) goToScene(8);
};
// ============================================================
// scene13.js — Ending 7: THE ANCIENT PASSAGE
// Path: Right → Hug Wall → Carved Staircase
// ============================================================

scenes[13] = function () {
  image(bg7, 0, 0, width, height);
  // Pot man examining the note
  drawPotMan(340, 200, 60, color(200, 140, 50), potManT * 0.6);

  drawTitle("THE ANCIENT PASSAGE", 42, 30, color(220, 160, 60));

  drawNarrativeBox(
    [
      "The staircase leads into the mountain's heart.",
      "A chamber of carved stone and amber torchlight.",
      "On the ground: a folded note from another climber.",
      '"I was here. I fell. I came back. So will you."',
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

sceneClicks[13] = function () {
  if (isMouseOver(400, BTN_Y + 10, 220, BTN_H)) goToScene(0);
};
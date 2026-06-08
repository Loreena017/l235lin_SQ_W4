# Week 4 Example 2: Rock Paper Scissors Best of 3

## What This Example Demonstrates

> **Note for students:** This section is included in example files only to help you study. Do not include it in your Side Quest submissions.

This example builds on Example 1 by adding score tracking, multiple rounds, game states, and a full start and end screen to create a complete Best of 3 Rock Paper Scissors game.

- **Game states** — the game moves through `STATE_START`, `STATE_PLAY`, and `STATE_OVER`; each state controls what gets drawn and what responds to clicks; stored as constants to prevent typos
- **Score tracking** — `playerScore` and `npcScore` persist across rounds; only choices and results are reset between rounds using `nextRound()`
- **Early win detection** — `playerChoose()` checks after each round whether someone has reached 2 wins; the game ends immediately rather than waiting for all 3 rounds
- **`nextRound()` vs `resetGame()`** — `nextRound()` clears only the current choices while keeping scores; `resetGame()` resets everything for a brand new game
- **Dynamic button labels** — the Next Round button changes its label to "See Result" when the game is over, using a ternary expression to pick the label based on game state
- **`frameCount`** — a built-in p5.js variable that increases by 1 every frame; used in `drawStartScreen()` and `drawGameOverScreen()` to animate blobs where the blob timers from sketch.js aren't available
- **Passing arguments to scene functions** — `drawGameScreen()` receives `playerBlobT` and `npcBlobT` as arguments so the blobs animate continuously across all screens
- **Shared global scope across files** — `drawHUD()` in scenes.js reads `currentRound`, `MAX_ROUNDS`, `playerScore`, and `npcScore` directly from game.js without any extra wiring, because all files share the same global scope

## Setup and Interaction Instructions

To run the sketch locally, open `index.html` in Google Chrome using Live Server.

Click **Start Game** to begin. Click **Rock**, **Paper**, or **Scissors** each round. First to win 2 rounds wins the game. Click **Play Again** to rematch.

**Opening the Chrome Console**

- **Windows:** Press `F12` or `Ctrl + Shift + J`, then click the **Console** tab
- **Mac:** Press `Cmd + Option + J`

The console will show any errors in your sketch.

## Assets


No external assets used. All visuals are generated with p5.js.

## References

[1] Alexandrabeganskaya. 2024. Serene sky above clouds at midday stock illustration - illustration of copy, window: 305064024. (January 2024). Retrieved June 6, 2026 from https://www.dreamstime.com/bright-sunlight-shining-over-expansive-white-cloudscape-serene-sky-above-clouds-midday-image305064024 

[2] Anon. 2025. 16 stunning places to go stargazing in 2025. (January 2025). Retrieved June 6, 2026 from https://www.afar.com/magazine/incredible-places-to-stargaze-around-the-world 

[3] Anon. A path between two sections of a large and dense bamboo forest in a... Retrieved June 6, 2026a from https://www.istockphoto.com/photo/path-through-bamboo-forest-gm1453503992-489454547 

[4] Anon.Retrieved June 6, 2026b from https://www.freepik.com/photos/ai-generated-dandelion 

[5] Anon.Retrieved June 6, 2026c from https://stockcake.com/i/crystalline-portal-vortex_1560880_1185851 

[6] Anon.Retrieved June 6, 2026d from https://stock.adobe.com/ca/search?k=%22dark+mountain%22 

[7] Mihavodlan. 2025. Ice background podium cold winter snow product platform floor frozen mountain iceberg. podium glacier cool ice background stage stock photo - image of cold, background: 370227162. (March 2025). Retrieved June 6, 2026 from https://www.dreamstime.com/ice-background-podium-cold-winter-snow-product-platform-floor-frozen-mountain-iceberg-glacier-cool-stage-landscape-display-icy-image370227162 

[8] kyotesue November 14, Kyotesue, tom gattiker      April 5, and Tom Gattiker. 2023. Muddy Creek Wilderness: Chimney canyon // adventr.co. (August 2023). Retrieved June 6, 2026 from https://adventr.co/2019/11/muddy-creek-wilderness-chimney-canyon/ 

[9] Pikulkeaw Sriburin. 2025. Majestic mountain peak emerging from clouds, Golden Sunrise illuminating the landscape, breathtaking travel destination, nature stock photo - image of Horizon, idyllic: 371388376. (March 2025). Retrieved June 6, 2026 from https://www.dreamstime.com/
majestic-mountain-peak-emerging-clouds-golden-sunrise-illuminating-landscape-breathtaking-travel-destination-nature-image371388376 

[10] Tom K. Download looking up through dense bamboo forest in Arashiyama, Kyoto Japan for Free. Retrieved June 6, 2026 from https://www.vecteezy.com/video/71737967-looking-up-through-dense-bamboo-forest-in-arashiyama-kyoto-japan 

import { invaderDraw, invaderUpdate, allInvaders } from "./invader.js";
import { playerDraw, playerUpdate, player } from "./player.js";
import { sharePosition } from "./grid.js";
import { projectileDraw, projectileUpdate } from "./projectile.js";
import { displayScore } from "./score.js";

const grid = document.getElementById("grid");
const menu = document.getElementById("game-menu");

const GAME_SPEED = 7;
let previousTime = 0;

function gameLoop(timeStamp) {
  let requestId = window.requestAnimationFrame(gameLoop);
  let delta = (timeStamp - previousTime) / 1000;
  if (delta < 1 / GAME_SPEED) return;

  previousTime = timeStamp;

  update();
  draw();
  displayScore();
  gameOver(requestId);
  win(requestId);
}

function draw() {
  grid.innerHTML = "";
  playerDraw(grid);
  invaderDraw(grid);
  projectileDraw(grid);
}

function update() {
  playerUpdate();
  invaderUpdate();
  projectileUpdate();
}

function isGameOver() {
  return allInvaders.some((invader) => {
    return sharePosition(invader, player) || invader.y > player.y;
  });
}

function gameOver(id) {
  if (!isGameOver()) return;
  window.cancelAnimationFrame(id);
  // TODO set a time delay before and add replay button
  grid.innerHTML = "";
  displayResultText("You Lose");
}

function win(id) {
  if (allInvaders.length !== 0) return;
  window.cancelAnimationFrame(id);
  grid.innerHTML = "";
  displayResultText("You Win!");
}

function displayResultText(string) {
  menu.innerHTML = `
    <h2 class="game-over-menu-header">${string}</h2>
    <a href="/" class="game-over-button">Play Again</a>
    `;
}

window.requestAnimationFrame(gameLoop);

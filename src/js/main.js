import { invaderDraw, invaderUpdate, allInvaders } from "./invader.js";
import { playerDraw, playerUpdate, player } from "./player.js";
import { sharePosition } from "./grid.js";

const grid = document.getElementById("grid");

const GAME_SPEED = 10;
let previousTime = 0;

function gameLoop(timeStamp) {
    let requestId = window.requestAnimationFrame(gameLoop);
    let delta = (timeStamp - previousTime) / 1000;
    if(delta < 1 / GAME_SPEED) return
    
    previousTime = timeStamp;

    
    update();
    draw();
    gameOver(requestId);
};

function draw() {
    grid.innerHTML = ""
    playerDraw(grid);
    invaderDraw(grid);
};

function update() {
    playerUpdate();
    invaderUpdate();
};

function isGameOver() {
    return allInvaders.some(invader => {
        return sharePosition(player, invader) || invader.y > player.y;
    });
};

function gameOver(id) {
    if (!isGameOver()) return;
    window.cancelAnimationFrame(id);
    // TODO set a time delay before and add big game over text along witha replay button
    grid.innerHTML = "";
};

window.requestAnimationFrame(gameLoop);
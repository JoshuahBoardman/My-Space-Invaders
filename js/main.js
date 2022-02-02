import { invaderDraw, invaderUpdate } from "./invader.js";
import { playerDraw, playerUpdate } from "./player.js";

const grid = document.getElementById("grid");

const GAME_SPEED = 2;
let previousTime = 0;

function gameLoop(timeStamp) {
    window.requestAnimationFrame(gameLoop);
    let delta = (timeStamp - previousTime) / 1000;
    if(delta < 1 / GAME_SPEED) return
    
    previousTime = timeStamp;

    draw();
    update();
};

function draw() {
    grid.innerHTML = ""
    playerDraw(grid);
    invaderDraw(grid);
}

function update() {
    playerUpdate();
    invaderUpdate();
}

window.requestAnimationFrame(gameLoop);
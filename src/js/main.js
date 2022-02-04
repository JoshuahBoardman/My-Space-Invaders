import { invaderDraw, invaderUpdate, allInvaders } from "./invader.js";
import { playerDraw, playerUpdate, player} from "./player.js";
import { girdBorder, sharePosition } from "./grid.js";
import { projectileDraw, projectileUpdate } from "./projectile.js";


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
    win(requestId);
};

function draw() {
    grid.innerHTML = ""
    playerDraw(grid);
    projectileDraw(grid);
    invaderDraw(grid);
};

function update() {
    playerUpdate();
    projectileUpdate();
    invaderUpdate();
};

function isGameOver() {
    return allInvaders.some(invader => {
        return sharePosition(invader, player);
    });
};

function gameOver(id) {
    if (!isGameOver()) return;
    window.cancelAnimationFrame(id);
    // TODO set a time delay before and add big game over text along witha replay button
    grid.innerHTML = "";
    displayResultText("You Loose");
};

function win(id) {
    if(allInvaders.length !== 0) return;
    window.cancelAnimationFrame(id);
    grid.innerHTML = "";
    displayResultText("You Win!");
}

function displayResultText(string) {
    const resultText = document.createElement("div");
    resultText.classList.add("result-text");
    resultText.innerText = `${string}`;
    grid.appendChild(resultText);
}

window.requestAnimationFrame(gameLoop);
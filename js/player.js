import { getInputDirection } from "./input.js";

const player = {x: 10, y: 18};

export function playerDraw(grid) {
    const newPlayer = document.createElement("div");
    newPlayer.classList.add("player");
    newPlayer.style.gridRowStart = player.y;
    newPlayer.style.gridColumnStart = player.x;
    newPlayer.innerHTML = `<i class="fas fa-rocket">`;
    grid.appendChild(newPlayer);
};

export function playerUpdate() {
    const inputDirection = getInputDirection();
    player.x += inputDirection.x;
    inputDirection.x = 0;
};
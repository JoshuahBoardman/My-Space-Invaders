import { girdBorder } from "./grid.js";
import { allProjectiles } from "./projectile.js";
import { sharePosition } from "./grid.js";
import { updateScore } from "./score.js";

// TODO move allInvaders to a json file
export let allInvaders = [
    // y: 2
     {x: 5, y: 2, type: "bitcoin"}, {x: 6, y: 2, type: "bitcoin"}, {x: 7, y: 2, type: "bitcoin"}, {x: 8, y: 2, type: "bitcoin"}, {x: 9, y: 2, type: "bitcoin"}, {x: 10, y: 2, type: "bitcoin"}, {x: 11, y: 2, type: "bitcoin"}, {x: 12, y: 2, type: "bitcoin"}, {x: 13, y: 2, type: "bitcoin"}, {x: 14, y: 2, type: "bitcoin"}, {x: 15, y: 2, type: "bitcoin"},
    // y: 3
    {x: 5, y: 3, type: "ethereum"}, {x: 6, y: 3, type: "ethereum"}, {x: 7, y: 3, type: "ethereum"}, {x: 8, y: 3, type: "ethereum"}, {x: 9, y: 3, type: "ethereum"}, {x: 10, y: 3, type: "ethereum"}, {x: 11, y: 3, type: "ethereum"}, {x: 12, y: 3, type: "ethereum"}, {x: 13, y: 3, type: "ethereum"}, {x: 14, y: 3, type: "ethereum"}, {x: 15, y: 3, type: "ethereum"},
    // y: 4
    {x: 5, y: 4, type: "ethereum"}, {x: 6, y: 4, type: "ethereum"}, {x: 7, y: 4, type: "ethereum"}, {x: 8, y: 4, type: "ethereum"}, {x: 9, y: 4, type: "ethereum"}, {x: 10, y: 4, type: "ethereum"}, {x: 11, y: 4, type: "ethereum"}, {x: 12, y: 4, type: "ethereum"}, {x: 13, y: 4, type: "ethereum"}, {x: 14, y: 4, type: "ethereum"}, {x: 15, y: 4, type: "ethereum"},
    // y: 5
    {x: 5, y: 5, type:"viacoin"}, {x: 6, y: 5, type:"viacoin"}, {x: 7, y: 5, type:"viacoin"}, {x: 8, y: 5, type:"viacoin"}, {x: 9, y: 5, type:"viacoin"}, {x: 10, y: 5, type:"viacoin"}, {x: 11, y: 5, type:"viacoin"}, {x: 12, y: 5, type:"viacoin"}, {x: 13, y: 5, type:"viacoin"}, {x: 14, y: 5, type:"viacoin"}, {x: 15, y: 5, type:"viacoin"},
    // y: 6
    {x: 5, y: 6, type:"viacoin"}, {x: 6, y: 6, type:"viacoin"}, {x: 7, y: 6, type:"viacoin"}, {x: 8, y: 6, type:"viacoin"}, {x: 9, y: 6, type:"viacoin"}, {x: 10, y: 6, type:"viacoin"}, {x: 11, y: 6, type:"viacoin"}, {x: 12, y: 6, type:"viacoin"}, {x: 13, y: 6, type:"viacoin"}, {x: 14, y: 6, type:"viacoin"}, {x: 15, y: 6, type:"viacoin"}
];

let moveRight = true;
let canAdvance = false;

export function invaderDraw(grid) { "ethereum"
    allInvaders.forEach(invader => {
        const newInvader = document.createElement("div");
        newInvader.classList.add("invader");
        newInvader.style.gridRowStart = invader.y;
        newInvader.style.gridColumnStart = invader.x;
        invaderTypeCheck(invader, newInvader);
        grid.appendChild(newInvader);
    })
};

export function invaderUpdate() {
    destroyInvader();
    if(invaderAtBorder() && canAdvance) {
        allInvaders.forEach(invader => {
            invader.y += 1;
        })
        moveRight = !moveRight
        canAdvance = false;
    } else if(moveRight) {
        allInvaders.forEach(invader => {
            invader.x += 1;
        })
        canAdvance = true;
    } else if(!moveRight) {
        allInvaders.forEach(invader => {
            invader.x += -1;
        })
        canAdvance = true;
    } 
};

function invaderTypeCheck(invader, el) {
    if (invader.type === "bitcoin") {
        el.innerHTML = `<i class="fab fa-bitcoin"></i>`;
    } else if (invader.type === "ethereum") {
        el.innerHTML = `<i class="fab fa-ethereum"></i>`;
    } else {
        el.innerHTML = `<i class="fab fa-viacoin"></i>`;
    }
};

function invaderAtBorder() {
    return allInvaders.some(invader => {
        return girdBorder(invader);
    })
};

function destroyInvader() {
    allInvaders.forEach(invader => {
        allProjectiles.forEach( projectile=> {
            if (sharePosition(invader, projectile)) {
                updateScore(invader);
                allInvaders.splice(allInvaders.indexOf(invader), 1);
            };
        });
    });
}


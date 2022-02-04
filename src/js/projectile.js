import { getProjectileInput } from "./input";
import { player } from "./player.js";
import { girdBorder, sharePosition} from "./grid.js";
import { allInvaders } from "./invader.js";

export const allProjectiles = [];


export function projectileDraw(grid)  {
    allProjectiles.forEach(projectile => {
        let newProjectile = document.createElement("div");
        newProjectile.classList.add("projectile-wrapper");
        newProjectile.style.gridRowStart = projectile.y -1;
        newProjectile.style.gridColumnStart = projectile.x;
        newProjectile.innerHTML = `<div class="projectile"></div>`
        grid.appendChild(newProjectile);
    })
};

export function projectileUpdate() {
    let projectileInput = getProjectileInput();
    destroyProjectile();
    if(projectileInput.y === -1) {
        fireProjectile();
        projectileInput.y = 0;
    }
    allProjectiles.forEach(projectile => {
        projectile.y -= 1;
    })
};

function fireProjectile() {
    let projectilePosition = {...player};
    allProjectiles.push({...projectilePosition});
};

function destroyProjectile() {
    allProjectiles.forEach(projectile => {
        allInvaders.forEach(invader => {
            if (girdBorder(projectile) || sharePosition(projectile, invader)) {
                allProjectiles.splice(allProjectiles.indexOf(projectile), 1);
            };
        });
    });
};


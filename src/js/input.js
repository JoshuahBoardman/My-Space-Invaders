let inputDirection = {x: 0, y: 0};
let projectileDirection = {x: 0, y: 0};

window.addEventListener("keydown", e => {
    switch(e.key) {
        case "ArrowRight":
            inputDirection = {x: 1, y: 0};
            break;
        case "ArrowLeft":
            inputDirection = {x: -1, y: 0};
            break;
        case "ArrowUp":
            projectileDirection ={x: 0, y: -1};
            break;
    }
});

export function getInputDirection() {
    return inputDirection;
}; 

export function getProjectileInput() {
    return projectileDirection;
}
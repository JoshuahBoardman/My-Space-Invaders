let inputDirection = {x: 0, y: 0};

window.addEventListener("keydown", e => {
    switch(e.key) {
        case "ArrowRight":
            inputDirection = {x: 1, y: 0};
            break;
        case "ArrowLeft":
            inputDirection = {x: -1, y: 0};
            break;
    }
});

export function getInputDirection() {
    return inputDirection;
};
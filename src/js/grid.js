const GRID_WIDTH = 19;

export function girdBorder(position) {
    return (position.x === 1 || position.x === GRID_WIDTH);
}

export function isRightBorder(position) {
    return position.x >= GRID_WIDTH;
}

export function isLeftBorder(position) {
    return position.x <= 1;
}

export function sharePosition(position1, position2) {
    return (position1.x === position2.x && position1.y === position2.y);
}
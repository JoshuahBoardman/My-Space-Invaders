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
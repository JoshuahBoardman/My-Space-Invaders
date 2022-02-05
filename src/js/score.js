const score = document.getElementById("score-number");
let scoreValue = 0;

export function updateScore(invader) {
    if(invader.type === "bitcoin") {
        scoreValue += 100;
    } else if(invader.type === "ethereum") {
        scoreValue += 75;
    } else if (invader.type === "viacoin") {
        scoreValue += 50;
    }
}

export function displayScore() {
    score.innerText = scoreValue;
}
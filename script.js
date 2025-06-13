const coin = document.getElementById("coin");
const flipBtn = document.getElementById("flip-coin");
const resetBtn = document.getElementById("reset");
const headsCounts = document.getElementById("heads-count");
const tailsCount = document.getElementById("tails-count");

let heads = 0;
let tails = 0;

flipBtn.addEventListener("click", () => {
    const isHeads = Math.random() < 0.5;
    coin.style.animation = "none";
    void coin.offsetWidth;
    const animationName = isHeads ? "spin-heads" : "spin-tails";
    coin.style.animation = `${animationName} 3s forwards`;


    if (isHeads) {
        heads++;
    }
    else {
        tails++;
    }
    disableButton();
    setTimeout(updateStats, 3000);
});

resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});
function updateStats() {
    headsCounts.textContent = `Heads: ${heads}`;
    tailsCount.textContent = `Tails: ${tails}`;

}
function disableButton() {
    flipBtn.disabled = true;
    setTimeout(() => {
        flipBtn.disabled = false;
    }, 3000);
}
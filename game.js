
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 320;
canvas.height = 200;

// Player
const player = new Player();

// Input
const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true;

    if (["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }
});

document.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
});

window.addEventListener("blur", () => {
    for (const key in keys) {
        keys[key] = false;
    }
});

// Update
function update() {
    let dx = 0;
    let dy = 0;

    if (keys["w"] || keys["arrowup"]) dy--;
    if (keys["s"] || keys["arrowdown"]) dy++;
    if (keys["a"] || keys["arrowleft"]) dx--;
    if (keys["d"] || keys["arrowright"]) dx++;

    // Normalize diagonal movement
    const length = Math.hypot(dx, dy);

    if (length > 0) {
        dx /= length;
        dy /= length;
    }

    player.move(dx, dy);

    // Keep player inside the world
    player.x = Math.max(player.size / 2, Math.min(320 - player.size / 2, player.x));
    player.y = Math.max(player.size / 2, Math.min(200 - player.size / 2, player.y));
}

// Draw
function draw() {
    ctx.fillStyle = "#252735";
    ctx.fillRect(0, 0, 320, 200);

    ctx.fillStyle = "#d6d6df";
    ctx.font = "12px monospace";
    ctx.fillText("UNKNOWN WORLD", 10, 20);

    player.draw(ctx);
}

// Game loop
function gameLoop() {
    update();
    draw();

    requestAnimationFrame(gameLoop);
}

gameLoop();



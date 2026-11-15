
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const TILE_SIZE = 16;

canvas.width = 320;
canvas.height = 192;

// Create world and player
const world = new World(20, 12);
const player = new Player();

// Input
const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
});

// Update
function update() {
    let dx = 0;
    let dy = 0;

    if (keys["w"] || keys["arrowup"]) dy = -1;
    if (keys["s"] || keys["arrowdown"]) dy = 1;
    if (keys["a"] || keys["arrowleft"]) dx = -1;
    if (keys["d"] || keys["arrowright"]) dx = 1;

    if (dx !== 0 || dy !== 0) {
        const newX = player.x + dx;
        const newY = player.y + dy;

        if (world.isWalkable(newX, newY)) {
            player.x = newX;
            player.y = newY;
        }

        // Prevent continuous movement from holding a key
        keys["w"] = false;
        keys["a"] = false;
        keys["s"] = false;
        keys["d"] = false;
        keys["arrowup"] = false;
        keys["arrowdown"] = false;
        keys["arrowleft"] = false;
        keys["arrowright"] = false;
    }
}

// Draw
function draw() {
    world.draw(ctx, TILE_SIZE);

    player.draw(ctx);
}

// Game loop
function gameLoop() {
    update();
    draw();

    requestAnimationFrame(gameLoop);
}

gameLoop();

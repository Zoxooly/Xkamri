
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 320;
canvas.height = 200;

function draw() {
    ctx.fillStyle = "#252735";
    ctx.fillRect(0, 0, 320, 200);

    ctx.fillStyle = "#d6d6df";
    ctx.font = "12px monospace";
    ctx.fillText("UNKNOWN WORLD", 10, 20);
}

function findItem() {
    const item = generateItem();

    draw();

    ctx.fillStyle = "#ffffff";
    ctx.fillText("You found:", 10, 65);

    ctx.fillStyle = "#e6c878";
    ctx.fillText(item.name, 10, 90);

    ctx.fillStyle = "#a0a0b0";
    ctx.fillText(item.description, 10, 115);
}

draw();


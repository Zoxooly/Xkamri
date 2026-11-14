const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 320;
canvas.height = 200;

ctx.fillStyle = "#252735";
ctx.fillRect(0, 0, 320, 200);

ctx.fillStyle = "#d6d6df";
ctx.font = "12px monospace";
ctx.fillText("THE WORLD IS EMPTY...", 75, 95);


class Player {
    constructor() {
        this.x = 10;
        this.y = 6;
        this.size = 10;
    }

    draw(ctx) {
        ctx.fillStyle = "#e6c878";

        ctx.fillRect(
            this.x * 16 + (16 - this.size) / 2,
            this.y * 16 + (16 - this.size) / 2,
            this.size,
            this.size
        );
    }
}

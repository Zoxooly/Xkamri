class Player {
    constructor() {
        this.x = 160;
        this.y = 100;
        this.speed = 2;
        this.size = 8;
    }

    move(dx, dy) {
        this.x += dx * this.speed;
        this.y += dy * this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = "#e6c878";
        ctx.fillRect(
            this.x - this.size / 2,
            this.y - this.size / 2,
            this.size,
            this.size
        );
    }
}

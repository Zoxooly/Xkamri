
class World {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        // Tile types
        this.tiles = {
            grass: {
                color: "#477d48",
                walkable: true
            },
            dirt: {
                color: "#92734d",
                walkable: true
            },
            water: {
                color: "#3977a0",
                walkable: false
            },
            stone: {
                color: "#777783",
                walkable: true
            }
        };

        // Generate the initial map
        this.map = [];

        for (let y = 0; y < height; y++) {
            const row = [];

            for (let x = 0; x < width; x++) {
                row.push("grass");
            }

            this.map.push(row);
        }
    }

    getTile(x, y) {
        if (
            x < 0 || x >= this.width ||
            y < 0 || y >= this.height
        ) {
            return null;
        }

        return this.map[y][x];
    }

    isWalkable(x, y) {
        const tile = this.getTile(x, y);

        if (tile === null) return false;

        return this.tiles[tile].walkable;
    }

    draw(ctx, tileSize) {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const tile = this.tiles[this.map[y][x]];

                ctx.fillStyle = tile.color;

                ctx.fillRect(
                    x * tileSize,
                    y * tileSize,
                    tileSize,
                    tileSize
                );

                ctx.strokeStyle = "#00000015";
                ctx.strokeRect(
                    x * tileSize,
                    y * tileSize,
                    tileSize,
                    tileSize
                );
            }
        }
    }
}

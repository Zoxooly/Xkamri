
function generateItem() {
    const totalWeight = ITEMS.reduce(
        (sum, item) => sum + item.rarity,
        0
    );

    let random = Math.random() * totalWeight;

    for (const item of ITEMS) {
        random -= item.rarity;

        if (random <= 0) {
            return item;
        }
    }

    return ITEMS[ITEMS.length - 1];
}

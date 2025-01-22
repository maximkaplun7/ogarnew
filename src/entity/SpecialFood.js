// File: SpecialFood.js
const Food = require('./Food');

class SpecialFood extends Food {
    constructor(server, owner, position, size) {
        super(server, owner, position, size);
        this.type = 2; // New type identifier
    }

    onRemove(server) {
        super.onRemove(server);
    }

    onEaten(consumer) {
        // Multiply player size by 2 when eaten
        consumer.setSize(consumer.radius * 2);
    }
}

module.exports = SpecialFood;
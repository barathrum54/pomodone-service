const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, // Timestamps eklemek için bu satırı ekledik
    }
);

module.exports = mongoose.model('Message', messageSchema);

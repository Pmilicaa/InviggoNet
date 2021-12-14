const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    content: String,
    friendshipId: Number,
    senderId: Number
});

module.exports = mongoose.model("Message", messageSchema);
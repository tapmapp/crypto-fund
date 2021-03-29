const mongoose = require('mongoose');

const subscribeSchema = new mongoose.Schema({
    email: { type: String, required: true },
    created: { type: Date, default: Date.now, required: true }
});

const Subscribe = mongoose.model('subscribe', subscribeSchema);

// ADD MESSAGE
subscribeSchema.methods.subscribe = (email) => {
    let subscriber = new Subscribe({ email });
    return subscriber.save();
}

module.exports = Subscribe;
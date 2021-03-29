const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    referal: { type: Boolean, required: true, default: false },
    message: { type: String, required: true },
    created: { type: Date, default: Date.now, required: true }
});

const Form = mongoose.model('form', formSchema);

// GET MESSAGES
Form.methods.getMessages = () => {
    return Form.find().sort({ date: -1 });
}

// ADD MESSAGE
Form.methods.addMessage = (name, email, phone, referal, message) => {
    const message = new Form({ name, email, phone, referal, message });
    return message.save();
}
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    referral: { type: Boolean, required: true, default: false },
    message: { type: String, required: true },
    created: { type: Date, default: Date.now, required: true }
});

const Form = mongoose.model('form', formSchema);

// GET MESSAGES
formSchema.methods.getMessages = () => {
    return Form.find().sort({ date: -1 });
}

// ADD MESSAGE
formSchema.methods.addMessage = (name, email, phone, referral, message) => {
    let formMessage = new Form({ name, email, phone, referral, message });
    return formMessage.save();
}

module.exports = Form;
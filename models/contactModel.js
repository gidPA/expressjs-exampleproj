const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add an email address"]
    },
    phone: {
        type: String,
        required: [true, "Please add a phone number"],
    },
}, {
    timestamps: true
});

module.export = mongoose.model("Contact", contactSchema);
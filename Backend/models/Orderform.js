const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    Order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    Customer_name: { type: String, required: true },
    Phone_Number: { type: Number, required: true },
    Size: { type: String, maxlength: 1 }, // Assuming Size is a single character
    Customer_email: { type: String, required: true },
    Colour: { type: String },
    Quantity: { type: Number, required: true },
    Customer_age: { type: String },
    Customer_gender: { type: String, enum: ['male', 'female'] },
    created_at: { type: Date, default: Date.now },
    Returning_Customer: { type: Boolean },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;

const mongoose = require('mongoose');

const drinkSchema = mongoose.Schema({
    title: String,
    price: Number,
    instock: Boolean,
    coffeine: Boolean,
    volume: Number,
    descriptioncDrink: String




});

const Drink = mongoose.model("Drink", drinkSchema)

module.exports = Drink;

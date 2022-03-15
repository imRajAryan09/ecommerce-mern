const asyncWrapper = require("../middleware/async-wrapper");
const Cart = require("../models/Cart");

// create Cart
const createCart = asyncWrapper(async (req, res) => {
	const newCart = new Cart(req.body);
	await newCart.save();
	res.status(200).json(newCart);
});

// update Cart
const updateCart = asyncWrapper(async (req, res) => {
	const updatedCart = await Cart.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{ new: true }
	);
	res.status(200).json(updatedCart);
});

// delete Cart
const deleteCart = asyncWrapper(async (req, res) => {
	await Cart.findByIdAndDelete(req.params.id);
	res.status(200).json("Cart has been sucessfully deleted");
});

// get all Carts
const getAllCarts = asyncWrapper(async (req, res) => {
	const Carts = await Cart.find();
	res.status(200).json(Carts);
});

// get Cart by ID
const getCartById = asyncWrapper(async (req, res) => {
	const Cart = await Cart.findOne({ userid: req.params.id });
	res.status(200).json({ Cart });
});

module.exports = {
	createCart,
	updateCart,
	deleteCart,
	getAllCarts,
	getCartById,
};

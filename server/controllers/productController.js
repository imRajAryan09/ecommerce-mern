const asyncWrapper = require("../middleware/async-wrapper");
const Product = require("../models/Product");

// create product controller
const createProduct = asyncWrapper(async (req, res) => {
	const newProduct = new Product(req.body);
	await newProduct.save();
	res.status(200).json(newProduct);
});

// update product controller
const updateProduct = asyncWrapper(async (req, res) => {
	const updatedProduct = await Product.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{ new: true }
	);
	res.status(200).json(updateProduct);
});

// delete product controller
const deleteProduct = asyncWrapper(async (req, res) => {
	await Product.findByIdAndDelete(req.params.id);
	res.status(200).json("Product has been sucessfully deleted");
});

// get all products controller
const getAllProducts = asyncWrapper(async (req, res) => {
	const qNew = req.query.new;
	const qCategory = req.query.category;
	let products;
	if (qNew) {
		products = await Product.find().sort({ _id: -1 }).limit(5);
	} else if (qCategory) {
		products = await Product.find({ category: { $in: [qCategory] } });
	} else {
		products = await Product.find();
	}
	res.status(200).json(products);
});

// get product by id controller
const getProductByID = asyncWrapper(async (req, res) => {
	const product = await Product.findById(req.params.id);
	res.status(200).json({ product });
});

module.exports = {
	createProduct,
	updateProduct,
	deleteProduct,
	getAllProducts,
	getProductByID,
};

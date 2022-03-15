const asyncWrapper = require("../middleware/async-wrapper");
const Order = require("../models/Order");

// create Order
const createOrder = asyncWrapper(async (req, res) => {
	const newOrder = new Order(req.body);
	await newOrder.save();
	res.status(200).json(newOrder);
});

// update Order
const updateOrder = asyncWrapper(async (req, res) => {
	const updatedOrder = await Order.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{ new: true }
	);
	res.status(200).json(updatedOrder);
});

// delete Order
const deleteOrder = asyncWrapper(async (req, res) => {
	await Order.findByIdAndDelete(req.params.id);
	res.status(200).json("Order has been sucessfully deleted");
});

// get all Order
const getAllOrders = asyncWrapper(async (req, res) => {
	const Order = await Order.find();
	res.status(200).json(Order);
});

// get Order by ID
const getOrderById = asyncWrapper(async (req, res) => {
	const Orders = await Order.find({ userid: req.params.id });
	res.status(200).json({ Orders });
});

// get monthly income
const getMonthlyIncome = asyncWrapper(async (req, res) => {
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
	const income = await Order.aggregate([
		{ $match: { createdAt: { $gte: previousMonth } } },
		{
			$project: {
				month: { $month: "$createdAt" },
				sales: "$amount",
			},
		},
		{
			$group: {
				_id: "$month",
				total: { $sum: "$sales" },
			},
		},
	]);
	res.status(200).json(income);
});

module.exports = {
	createOrder,
	updateOrder,
	deleteOrder,
	getAllOrders,
	getOrderById,
	getMonthlyIncome,
};

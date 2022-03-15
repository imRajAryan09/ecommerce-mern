const cryptoJS = require("crypto-js");
const User = require("../models/User");
const asyncWrapper = require("../middleware/async-wrapper");

// update user logic
const updateUser = asyncWrapper(async (req, res) => {
	if (req.body.password) {
		req.body.password = cryptoJS.AES.encrypt(
			req.body.password,
			process.env.SECRET_KEY
		).toString();
	}
	const updatedUser = await User.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{ new: true }
	);
	res
		.status(200)
		.json({ user: updatedUser, msg: "User has been sucessfully updated" });
});

// delete user logic
const deleteUser = asyncWrapper(async (req, res) => {
	await User.findByIdAndDelete(req.params.id);
	res.status(200).json({ msg: "User has been sucessfully deleted" });
});

// get all user logic
const getAllUsers = asyncWrapper(async (req, res) => {
	const query = req.params.new;
	const users = query
		? await User.find().sort({ _id: -1 }).limit(5)
		: await User.find();
	res.status(200).json({ user: users, msg: "All Users found sucessfully" });
});

// get user by :id logic
const getUserById = asyncWrapper(async (req, res) => {
	const user = await User.findById(req.params.id);
	const { password, ...others } = user._doc;
	res.status(200).json({ user: others, msg: "User found sucessfully" });
});

// get user stats logic
const getUserStats = asyncWrapper(async (req, res) => {
	const date = new Date();
	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
	const data = await User.aggregate([
		{ $match: { createdAt: { $gte: lastYear } } },
		{ $project: { month: { $month: "$createdAt" } } },
		{ $group: { _id: "$month", total: { $sum: 1 } } },
	]);
	res.status(200).json(data);
});

module.exports = {
	updateUser,
	deleteUser,
	getAllUsers,
	getUserById,
	getUserStats,
};

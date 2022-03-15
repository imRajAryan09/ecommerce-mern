const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const asyncWrapper = require("../middleware/async-wrapper");
const User = require("../models/User");

// register user logic
const registerUser = asyncWrapper(async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: cryptoJS.AES.encrypt(
			req.body.password,
			process.env.SECRET_KEY
		).toString(),
	});
	const savedUser = await newUser.save();
	res.status(201).json({ savedUser });
});

// login user logic
const loginUser = asyncWrapper(async (req, res) => {
	const user = await User.findOne({ username: req.body.username });
	!user && res.status(401).json("Wrong User Name");
	const hashedPassword = cryptoJS.AES.decrypt(
		user.password,
		process.env.SECRET_KEY
	).toString(cryptoJS.enc.Utf8);
	hashedPassword != req.body.password && res.status(401).json("Wrong Password");
	const acessToken = jwt.sign(
		{ id: user._id, isAdmin: user.isAdmin },
		process.env.JWT_KEY
	);
	const { password, ...others } = user._doc;
	res.status(200).json({ ...others, acessToken });
});

const dummyRoute = asyncWrapper(async (req, res) => {
	res.status(200).json({ message: "dummy route" });
});

module.exports = { registerUser, loginUser, dummyRoute };

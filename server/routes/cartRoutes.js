const router = require("express").Router();
const {
	createCart,
	getAllCarts,
	getCartById,
	updateCart,
	deleteCart,
} = require("../controllers/cartController");
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("../middleware/verify-token");

router
	.route("/")
	.post(verifyToken, createCart)
	.get(verifyTokenAndAdmin, getAllCarts);

router
	.route("/:id")
	.get(verifyTokenAndAuthorization, getCartById)
	.put(verifyTokenAndAuthorization, updateCart)
	.delete(verifyTokenAndAuthorization, deleteCart);

module.exports = router;
const router = require("express").Router();
const {
	updateOrder,
	deleteOrder,
	createOrder,
	getAllOrders,
	getMonthlyIncome,
	getOrderById,
} = require("../controllers/orderController");
const {
	verifyToken,
	verifyTokenAndAdmin,
} = require("../middleware/verify-token");

router
	.route("/")
	.post(verifyToken, createOrder)
	.get(verifyTokenAndAdmin, getAllOrders);
router
	.route("/:id")
	.put(verifyTokenAndAdmin, updateOrder)
	.delete(verifyTokenAndAdmin, deleteOrder)
	.get(verifyToken, getOrderById);
router.route("/monthlyIncome").get(verifyTokenAndAdmin, getMonthlyIncome);

module.exports = router;

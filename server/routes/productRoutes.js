const router = require("express").Router();
const {
	deleteProduct,
	updateProduct,
	getProductByID,
	createProduct,
	getAllProducts,
} = require("../controllers/productController");
const {
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("../middleware/verify-token");

router.route("/").post(verifyTokenAndAdmin, createProduct).get(getAllProducts);

router
	.route("/:id")
	.put(verifyTokenAndAuthorization, updateProduct)
	.delete(verifyTokenAndAuthorization, deleteProduct)
	.get(getProductByID);

module.exports = router;
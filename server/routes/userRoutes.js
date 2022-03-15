const router = require("express").Router();
const {
	updateUser,
	deleteUser,
	getUserById,
	getAllUsers,
	getUserStats,
} = require("../controllers/userController");
const {
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("../middleware/verify-token");

router.get("/", verifyTokenAndAdmin, getAllUsers);
router
	.route("/:id")
	.put(verifyTokenAndAuthorization, updateUser)
	.delete(verifyTokenAndAuthorization, deleteUser)
	.get(verifyTokenAndAdmin, getUserById);
router.get("/stats", verifyTokenAndAdmin, getUserStats);

module.exports = router;

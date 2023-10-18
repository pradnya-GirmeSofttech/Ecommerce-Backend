const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  updatePassword,
  getUserProfile,
  updateProfile,
  allUsers,
  getUserDetails,
  updateUser,
  deleteUser,
} = require("../controllers/authController");
const { isAuthenticatedUsers, authorizeRoles } = require("../middlewares/auth");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/password/update").put(isAuthenticatedUsers, updatePassword);

router.route("/me").get(isAuthenticatedUsers, getUserProfile);
router.route("/password/update").put(isAuthenticatedUsers, updatePassword);
router.route("/me/update").put(isAuthenticatedUsers, updateProfile);

router
  .route("/admin/users")
  .get(isAuthenticatedUsers, authorizeRoles("admin"), allUsers);

router
  .route("/admin/user/:id")
  .get(isAuthenticatedUsers, authorizeRoles("admin"), getUserDetails)
  .put(isAuthenticatedUsers, authorizeRoles("admin"), updateUser)
  .delete(isAuthenticatedUsers, authorizeRoles("admin"), deleteUser);

module.exports = router;

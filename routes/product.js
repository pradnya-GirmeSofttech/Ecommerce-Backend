const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controllers/productController");
const { isAuthenticatedUsers, authorizeRoles } = require("../middlewares/auth");

router.route("/products").get(getProducts);
router.route("/admin/products").get(getAdminProducts);
router.route("/product/:id").get(getSingleProduct);

router
  .route("/admin/product/new")
  .post(isAuthenticatedUsers, authorizeRoles("admin"), newProducts);

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUsers, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUsers, authorizeRoles("admin"), deleteProduct);

router.route("/review").put(isAuthenticatedUsers, createProductReview);
router.route("/reviews").get(isAuthenticatedUsers, getProductReviews);
router.route("/reviews").delete(isAuthenticatedUsers, deleteReview);

module.exports = router;

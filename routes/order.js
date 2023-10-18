const express = require("express");
const router = express.Router();

const {
  newOrder,
  getSingleOrder,
  myOrders,
  allOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const { isAuthenticatedUsers, authorizeRoles } = require("../middlewares/auth");
router.route("/order/new").post(isAuthenticatedUsers, newOrder);
router.route("/order/:id").get(isAuthenticatedUsers, getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUsers, myOrders);
router
  .route("/admin/orders")
  .get(isAuthenticatedUsers, authorizeRoles("admin"), allOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUsers, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenticatedUsers, authorizeRoles("admin"), deleteOrder);

module.exports = router;

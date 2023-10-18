const express = require("express");
const router = express.Router();

const {
  processPayment,
  sendStripApi,
} = require("../controllers/paymentController");
const { isAuthenticatedUsers, authorizeRoles } = require("../middlewares/auth");

router.route("/payment/process").post(isAuthenticatedUsers, processPayment);
router.route("/stripeapi").get(isAuthenticatedUsers, sendStripApi);
module.exports = router;

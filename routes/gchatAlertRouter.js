const express = require("express");
const router = express.Router();
const gchatAlertController = require("../controllers/gchatAlertController");

router.route('/').post([], gchatAlertController.getBody);

module.exports = router;

const express = require("express");
const router = express.Router();
const gchatAlertController = require("../controllers/gchatAlertController");
const validations = require('./validations');

router.route('/sendK8Alert').post(validations.getValidateSendK8Alert, gchatAlertController.sendK8Alert);

module.exports = router;

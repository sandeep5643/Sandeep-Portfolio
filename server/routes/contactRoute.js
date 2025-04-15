const express = require("express");
const router = express.Router();

const { contactFormSubmit } = require("../controllers/contactController");

// @route   POST /api/contact
// @desc    Submit contact form
router.post("/contact", contactFormSubmit);

module.exports = router;

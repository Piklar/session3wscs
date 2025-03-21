const express = require("express");
const router = require("express").Router();

const userController = require('../controllers/userControllers.js');

module.exports = router;

// Register
router.post("/register", userController.registerUser);
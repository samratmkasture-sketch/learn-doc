const express = require("express");
const router = express.Router();

const userRoutes = require("./routes");
const propertiesRoutes = require("./properties");

router.use("/users", userRoutes);
router.use("/properties", propertiesRoutes);

module.exports = router;

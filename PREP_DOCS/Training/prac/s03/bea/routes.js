const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.dir(req.hostname);
  console.dir(req.protocol);
  console.dir(req.params);
  console.dir(req.query);

  res.send(`
  ${req.hostname}
  `);
});
router.get("/about", (req, res) => {
  res.send("About Page");
});

module.exports = router;

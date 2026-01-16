var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const users = [
    {
      name: "Amit",
    },
    {
      name: "Sumit",
    },
  ];
  res.render("index", { title: "Home Page", users: users });
});

module.exports = router;

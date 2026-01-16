const express = require("express");
const router = express.Router();

const properties = [];

router.get("/", (req, res) => {
  res.render("index", {
    query: req.query,
    params: req.params,
    path: req.pathname,
    search: req.search,
    page: "/properties",
    properties: properties,
  });
});

router.post("/", (req, res) => {
  console.log("router.post('/properties'");
  properties.push(req.body);
  // res.send(properties);
  res.redirect("properties");
});

module.exports = router;

const express = require("express");
const router = express.Router();

const users = [];
router.get("/", (req, res) => {
  // res.status(200).send({ msg: "OK" });
  // res.send(`
  //       ${req.query.created ? "<h1>Info Saved!</h1>" : ""}
  //       <form action="/users" method="post" class="form-example">
  //       <div class="form-example">
  //         <label for="name">Enter your name: </label>
  //         <input type="text" name="name" id="name" required />
  //       </div>
  //       <div class="form-example">
  //         <label for="email">Enter your email: </label>
  //         <input type="email" name="email" id="email" required />
  //       </div>
  //       <div class="form-example">
  //         <input type="submit" value="Submit!" />
  //       </div>
  //     </form>
  // `);
  res.render("index", {
    query: req.query,
    params: req.params,
    path: req.pathname,
    search: req.search,
    page: "/users",
    users,
  });
});
// router.get("/user/:id", (req, res) => {
//   res.render("home", { title: req.rawHeaders });
// });

router.post("/", (req, res) => {
  users.push(req.body);
  res.redirect("users/?created=true");
  // res.send(req.body);
});
router.post("/user", (req, res) => {
  console.log("router.post('/user'");
  users.push(req.body);
  res.status(200).send(users);
});
router.patch("/user", (req, res) => {
  res.render("home", { title: req.rawHeaders });
});
router.delete("/user", (req, res) => {
  res.render("home", { title: req.rawHeaders });
});

module.exports = router;

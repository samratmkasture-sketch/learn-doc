const dotenv = require("dotenv");
const express = require("express");
const cookieparser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

// Configuring dotenv
dotenv.config();
const app = express();

// Setting up middlewares to parse request body and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser("MY SECRET"));

const userCredentials = {
  username: "admin",
  password: "admin123",
  email: "admin@gmail.com",
};

app.get("/cookie1", function (req, res) {
  res.cookie("cookie1", "This is my first cookie", {
    signed: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });
  res.end("Cookie has been set");
});
app.get("/cookie", (req, res) => {
  //   res.cookie("name", "value", { signed: true });
  //   res.cookie("name1", "value1");
  res.send({
    c: req.cookies,
    sc: req.signedCookies,
  });
});

// app.post("/login", (req, res) => {
//   // Destructuring username & password from body
//   const { username, password } = req.body;

//   // Checking if credentials match
//   if (
//     username === userCredentials.username &&
//     password === userCredentials.password
//   ) {
//     //creating a access token
//     const accessToken = jwt.sign(
//       {
//         username: userCredentials.username,
//         email: userCredentials.email,
//       },
//       process.env.ACCESS_TOKEN_SECRET,
//       {
//         expiresIn: "10m",
//       }
//     );
//     // Creating refresh token not that expiry of refresh
//     //token is greater than the access token

//     const refreshToken = jwt.sign(
//       {
//         username: userCredentials.username,
//       },
//       process.env.REFRESH_TOKEN_SECRET,
//       { expiresIn: "1d" }
//     );

//     // Assigning refresh token in http-only cookie
//     res.cookie("jwt", refreshToken, {
//       httpOnly: true,
//       sameSite: "None",
//       secure: true,
//       maxAge: 24 * 60 * 60 * 1000,
//     });
//     return res.json({ accessToken });
//   } else {
//     // Return unauthorized error if credentials don't match
//     return res.status(406).json({
//       message: "Invalid credentials",
//     });
//   }
// });

app.get("/toeken", (req, res) => {
  // Destructuring username & password from body

  //creating a access token
  const accessToken = jwt.sign(
    {
      email: "sam@test.com",
    },
    "ACCESS_TOKEN_SECRET", //   process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "10m",
    }
  );
  // Creating refresh token not that expiry of refresh
  //token is greater than the access token

  const refreshToken = jwt.sign(
    {
      username: userCredentials.username,
    },
    "REFRESH_TOKEN_SECRET", //   process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  // Assigning refresh token in http-only cookie
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    // sameSite: "None",
    // secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  return res.json({ accessToken });
});

app.get("/refresh", (req, res) => {
  if (req.cookies?.jwt) {
    // Destructuring refreshToken from cookie
    const refreshToken = req.cookies.jwt;

    // Verifying refresh token
    jwt.verify(
      refreshToken,
      "REFRESH_TOKEN_SECRET", //   process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          // Wrong Refesh Token
          return res.status(406).json({ message: "Unauthorized" });
        } else {
          // Correct token we send a new access token
          const accessToken = jwt.sign(
            {
              email: "sam@test.com",
            },
            "ACCESS_TOKEN_SECRET", //process.env.ACCESS_TOKEN_SECRET,
            {
              expiresIn: "10m",
            }
          );
          return res.json({ accessToken });
        }
      }
    );
  } else {
    return res.status(406).json({ message: "Unauthorized" });
  }
});

app.get("/", (req, res) => {
  res.send("Server");
  console.log("server running");
});

app.listen(8000, () => {
  console.log(`Server active on http://localhost:${8000}!`);
});

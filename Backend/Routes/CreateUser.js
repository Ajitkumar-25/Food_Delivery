const express = require("express");
const router = express.Router();
const user = require("../Models/users");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwt_secret="t"

router.post(
  "/createuser",
  [
    body("email", "invalid email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "incorrect password").isLength({ min: 5 }),
  ],
  async (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    try {
      await user.create({
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
        password: secPass,
      });
      resp.json({ success: true });
    } catch (error) {
      console.log(error);
      resp.json({ success: false });
    }
  }
);

// route for login

router.post(
  "/loginuser",
  [
    body("email", "invalid email").isEmail(),
    body("password", "incorrect password").isLength({ min: 5 }),
  ],
  async (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
      let userdata = await user.findOne({ email });
      if (!userdata) {
        return resp.status(400).json({ error: "invalid email" });
      }
      const pwdcompare = await bcrypt.compare(
        req.body.password,
        userdata.password
      );
      if (!pwdcompare) {
        return resp.status(400).json({ error: "invalid password" });
      }

      const data = {
        user: {
          id: userdata.id,
        },
      };

      // create jwt token and send it in response header with status code as well
      const authtoken = jwt.sign(data, jwt_secret);
      return resp.json({ success: true, authtoken: authtoken });
    } catch (error) {
      console.log(error);
      resp.json({ success: false });
    }
  }
);

module.exports = router;

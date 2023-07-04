const express = require("express");
const router = express.Router();
const user = require("../Models/users");
const { body, validationResult } = require("express-validator");
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

    try {
      await user.create({
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
        password: req.body.password,
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
      if (userdata.password !== req.body.password) {
        return resp.status(400).json({ error: "invalid password" });
      }
      return resp.json({ success: true });
    } catch (error) {
      console.log(error);
      resp.json({ success: false });
    }
  }
);

module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.post("/addUser", async (req, res) => {
  const { name, email, currentArea, phoneNo, position } = req.body;
  try {
    const employee = new User({
      name, email, currentArea, phoneNo, position
    });
    const result = await employee.save();
    res.status(200).send({
      data: result,
      status: "ok",
      message: "User created Successfully",
    });
  } catch (error) {
    // console.log(error, "ERR");
    res.status(400).send({ status: "error", message: "Something went wrong" });
  }
});



router.get("/getAllUsers", async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).send({ data: result.reverse(), status: "ok" });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: "Something went wrong",
    });
  }
});

router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send({
      data: result,
      status: "ok",
      message: "User deleted Successfully",
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: "Something went wrong",
    });
  }
});

router.put("/updateUser/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send({
      data: result,
      status: "ok",
      message: "User Updated Successfully",
    });
  } catch (error) {
    //   console.log(error, "ERR");
    res.status(400).send({
      status: "error",
      message: "Something went wrong",
    });
  }
});

module.exports = router;

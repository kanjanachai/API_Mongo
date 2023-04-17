const User = require("../models/userModel");

exports.index = async (req, res, next) => {
  const [{ name, detail }] = await User.find();
  res.status(200).json({
    name: name,
    detail: detail,
  });
};

exports.updateInfo = async (req, res, next) => {
  const user = await User.findById("643d17f2c90094dadce0f7d0");
  const { name, age } = req.body;

  user.name = name;
  user.detail.age = age;
  await user.save();

  res.status(200).json({
    message: "Update Data Success."
  })
};

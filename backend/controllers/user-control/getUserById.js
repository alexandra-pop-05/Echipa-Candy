const User = require("../../models/user");

const getUserById = async (req, res, next) => {
  const userId = req.params.uid;
  let user;
  try {
    user = await User.findById(userId);
    if (!user)
      return res.json({
        message: " No user found!",
      });
  } catch (err) {
    return res.json({ message: "Could not get user.", err: err });
  }
  res.json({
    message: "User: ",
    user,
  });
};

module.exports = getUserById;

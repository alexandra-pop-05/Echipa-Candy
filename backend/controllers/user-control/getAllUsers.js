const User = require("../../models/user");

const showAllUsers = async (req, res, next) => {
  let user;
  try {
    user = await User.find().exec();

    if (!user)
      return res.json({
        message: " No users found!",
      });
  } catch (err) {
    return res.json({ message: "Could not get users.", err: err });
  }
  res.json({
    message: "Users: ",
    user: user,
  });
};

module.exports = showAllUsers;

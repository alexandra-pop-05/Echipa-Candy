// const {
//   validationResult
// } = require('express-validator');

//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')
const User = require("../../models/user");


const createUser = async (req, res, next) => {
  // const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   return res.json({
  //     message: 'Invalid input.'
  //   });
  // }

  const {
    name,
    email,
    password,
  } = req.body;

  let createdUser;
  try {
    const users = await User.find().exec();

    const usedEmail = users.find((p) => p.email === email);
  

    if (usedEmail)
      // se verifica daca email-ul introdus exista in baza de date
      return res.json({
        message: "Email already used! ",
      });

    // if (password != confirm_password)
    // // se verifica daca cele 2 parole corespund
    // return res.json({
    //   message: "Passwords do not match! ",
    // });

    // let hashedPassword;
    // try {
    //   hashedPassword = await bcrypt.hash(password, 5) // criptarea parolei
    // } catch (err) {
    //   res.status(500).json({
    //     error: "Could not create user."
    //   })
    // }

    createdUser = new User({
      name,
      email,
      password,
    
    });
    await createdUser.save();
  } catch (err) {
    res.status(500).json("Registration has failed!");
  }


  res.json({
    message: "New user added!",
    user: createdUser,
    // token: token,
  });
};

module.exports = createUser;

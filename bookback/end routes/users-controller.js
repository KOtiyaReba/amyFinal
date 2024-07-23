const User = require("../model/User");
//tried to require bcrypt without installing that package
const bcrypt = require("bcrypt");

const signup = async (req, res, next) => {
  const { name, place, age, email, education, contact, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.error(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "User already exists!" });
  }

  let hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
  console.log(hashedPassword);


  // const hashedPassword = bcrypt.hashSync(password);
  // console.log(hashedPassword);
  const user = new User({
    name,
    place,
    age,
    email,
    education,
    contact,
    password: hashedPassword,
    booksRented: [],
  });

  try {
    await user.save();
  } catch (err) {
    return console.error(err);
  }
  return res.status(201).json({ user });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.error(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User not found!" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect password!" });
  }
  return res
    .status(200)
    .json({ message: "Login successful", user: existingUser });
};

const getUserById = async (req, res, next) => {
  const userId = req.params.id;
  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    return console.error(err);
  }
  if (!user) {
    return res.status(404).json({ message: "User not found!" });
  }
  return res.status(200).json({ user });
};

const updateUser = async (req, res, next) => {
  const userId = req.params.id;
  const { name, place, age, email, education, contact } = req.body;
  let user;
  try {
    user = await User.findByIdAndUpdate(
      userId,
      {
        name,
        place,
        age,
        email,
        education,
        contact,
      },
      { new: true }
    );
  } catch (err) {
    return console.error(err);
  }
  if (!user) {
    return res.status(404).json({ message: "User not found!" });
  }
  return res.status(200).json({ user });
};

module.exports = {
  signup,
  login,
  getUserById,
  updateUser,
};

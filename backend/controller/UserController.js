const UserModel = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register user   post api/user/register  unprotected
const register = async (request, response) => {
  const { name, email, password, avatar, posts } = request.body;
  try {
    const existUser = await UserModel.findOne({ email });
    if (existUser) {
      return response.status(400).json({
        message: "email already exist",
      });
    } else {
      if (!email || !password || !name) {
        return response.status(400).json({
          message: "fill the requirements",
        });
      }

      const newEmail = email.toLowerCase();

      if (password.trim().length < 6) {
        return response.status(400).json({
          message: "password must be 6 characters minimum",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      if (hashedPassword) {
        const newUser = await UserModel.create({
          name,
          email: newEmail,
          password: hashedPassword,
        });
        if (newUser) {
          return response.status(201).json({
            message: "User created",
            user: newUser,
          });
        } else {
          return response.status(400).json({
            message: "user not created",
          });
        }
      }
    }
  } catch (error) {
    return response.status(400).json({
      message: "error",
      error: error.message,
    });
  }
};

// login user   post api/user/login  unprotected
const logIn = async (request, response) => {
  const { email, password } = request.body;
  try {
    const newEmail = email.toLowerCase();

    const user = await UserModel.findOne({ email: newEmail });
    if (user) {
      const verifyUser = await bcrypt.compare(password, user.password);
      if (verifyUser) {
        const token = await jwt.sign(
          { email: user.email, id: user._id },
          process.env.SECRET,
          { expiresIn: "24h" }
        );

        return response.status(200).json({
          message: "user loggedIn",
          user: user.email,
          jwt: token,
        });
      } else {
        return response.status(401).json({
          message: "invalid password",
        });
      }
    } else {
      return response.status(401).json({
        message: "invalid email user not found",
      });
    }
  } catch (error) {
    return response.status(401).json({
      message: "Invalid credentials",
    });
  }
};

// user profile  get api/user/:id  protected
const userProfile = async (request, response) => {
  const { id } = request.params;
  try {
    const user = await UserModel.findById(id).select("-password"); //without password it return user object
    if (user) {
      return response.status(200).json({
        message: "user found",
        user: user,
      });
    } else {
      return response.status(404).json({
        message: "user not found",
      });
    }
  } catch (error) {
    return response.status(404).json({
      error: error.message,
    });
  }
};

// change user avatar   put api/user/changeAvatar  protected
const changeUserAvatar = async (request, response) => {
  try {
    if (request.file) {
      console.log(request.file);
      return response.status(200).json({
        message: "upload success",
      });
    }
  } catch (error) {
    return response.status(400).json({
      message: "error",
      error: error.message,
    });
  }
};

// edit profile  put api/user/edit protected
const userProfileDetailsChange = async (request, response) => {
  return response.json({ message: " edit profile" });
};

// get avatar  get api/user/getAvatar  unprotected
const getAvatar = async (request, response) => {
  return response.json({ message: " all avatar" });
};

module.exports = {
  register,
  logIn,
  userProfile,
  changeUserAvatar,
  userProfileDetailsChange,
  getAvatar,
};

import Business from "../models/businessModel.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { senEm } from "../utils/ema.js";
// import jwt from "jsonwebtoken";
// import giveJwtTok from "../utils/jwtTok.js";

export const getUsers = async (req, res, next) => {
  try {
    if (req.user.role !== "admin")
      return res.status(401).json({ message: "you cant access this way " });
    const users = await User.find();
    if (!users) return res.status(404).json({ message: "No users Found" });
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(505).json({
      success: false,
      message: `Internal Server Error`,
      error,
    });
  }
};

export const getUserbyId = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json({
    success: true,
    data: user,
  });
};

export const updateUser = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      return res.status(200).json({
        success: true,
        data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    });
};

export const register = async (req, res) => {
  const avatar = {};

  const { email, password, username } = req.body;
  if (!email || !password || !username)
    return res.status(401).send({ message: "Please provide all fields" });

  const userExistWithThatName = await User.findOne({ username });
  if (userExistWithThatName)
    return res.status(402).json({ message: "User already exists" });

  const userExistWithThatEmail = await User.findOne({ email });
  if (userExistWithThatEmail)
    return res.status(402).json({ message: "User already exists" });

  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ email, password, username });
  // giveJwtTok(user, 201, res);
  const token = await user.generateAuthToken();
  const options = {
    expires: new Date(
      Date.now() + parseInt(process.env.JWT_EXPIRE_TIME) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.cookie("token", token, options);
  res.status(201).send({
    success: true,
    message: "User registered successfully again",
    token,
  });
  // .then((data) => {
  //   const token = jwt.sign({ id: data._id }, process.env.JWT_SECRET, {
  //     expiresIn: process.env.JWT_EXPIRE_TIME,
  //   });
  //   res.cookie("token", token, { httpOnly: true });
  //   return res.status(201).json({
  //     success: true,
  //     message: "User registered successfully",
  //     token,
  //   });
  // })
  // .catch((err) => {
  //   return res.status(500).json({
  //     success: false,
  //     message: `invalid email or password ${err}`,
  //   });
  // });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).send({ message: "Please provide all fields" });

  const user = await User.findOne({ email }).select("+password");
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ message: "invalid email or password" });
  // Set the JWT as a cookie

  const token = await user.generateAuthToken();
  const options = {
    expires: new Date(
      Date.now() + parseInt(process.env.JWT_EXPIRE_TIME) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.cookie("token", token, options);

  res.status(200).json({
    success: true,
    message: "login successful is done ",
    id: user._id,
    token,
  });
};

// export const profile = async (req, res, next) => {
//   const id = req.user._id;
//   const data = {
//     id
//   };
//   res.status(200).json({
//     message: "Welcome ",
//     data,
//   });
// };

export const logout = async (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "logout successful",
  });
};

export const findBusinessByUser = async (req, res, next) => {
  try {
    const user = req.params.id;
    const userBusiness = await Business.find({ user: user })
      // .populate("User")
      .then((dat) => {
        res.status(200).json({
          success: true,
          message: "Find Business Added By User",
          data: dat,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `busibyiderr  :: ${err}`,
        });
      });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: `ERR APPEAR ${error}`,
    });
  }
};

// const transPort = nodemailer.createTransport({
//   service: process.env.SERV,
//   auth: {
//     user: process.env.EUSER,
//     pass: process.env.EPASS,
//   },
// });

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const exist = await User.findOne({ email });
    if (!exist) {
      return res.status(401).json({
        success: false,
        message: `User Not Exist With That  `,
      });
    }

    const rtok = await exist.grt();
    exist.save();

    const url = `${process.env.FRONTEND}/forgot/${rtok}`;

    const message = `Your Password reset Link Has Been Sent To ${url} ,If you have not request then please Ignore`;

    await senEm(exist.email, "Dialkro Reset Password ", message);
    // console.log(rtok);

    // const resetPastok = crypto.randomBytes(20).toString("hex");
    // exist.rPT = resetPastok;
    // exist.rPTT = Date.now() + 1800000;

    // const mailDetail = {
    //   from: "dkro.com",
    //   to: `${exist.email}`,
    //   subject: "Password Reset Link",
    //   text: "Click here to reset Password",
    // };

    // const grtid = await exist.grt();
    res.status(201).json({
      success: true,
      message: `Reset password email has been sent please check your Email Inbox ${exist.email}`,
      token: rtok,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: `ERR APPEAR ${error}`,
    });
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { token } = req.params;

    const resetpassTok = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");
    const user = await User.findOne({
      resetpassTok,
      resetPasstime: { $gt: Date.now() },
    });

    if (!user) return res.status(401).json({ message: "No Token Exist " });

    const { password } = req.body;
    user.password = password;
    user.resetpassTok = undefined;
    user.resetPasstime = undefined;
    await user.save();

    res.status(201).json({
      success: true,
      message: ` password Changed SuccessFully `,
      token,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: `ERR APPEAR ${error}`,
    });
  }
};

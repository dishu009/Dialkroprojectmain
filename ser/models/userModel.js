import mongoose from "mongoose";
import validate from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
const { Schema } = mongoose;

// Define the User schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please Enter Your Name"],

      unique: [true, "Username already exists"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: [true, "Email already exists"],
      validate: [validate.isEmail, "Please enter a valid email"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter Your Password"],
      select: false,
    },
    avatar: {
      public_id: {
        type: String,
        // required: true,
      },
      url: {
        type: String,
        // required: true,
      },
    },
    name: {
      type: String,
      trim: true,
    },
    profilePicture: {
      type: String,
    },
    // Add other user-related fields as needed
    // For example: dateOfBirth, address, phone, etc.
    dateOfBirth: {
      type: Date,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"], // Role-specific values, you can add more roles as needed
      default: "user",
      select: false,
    },
    resetpassTok: {
      type: String,
    },
    resetPasstime: {
      type: Date,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id, role: this.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });
  // user.tokens = user.tokens.concat({ token });
  // await user.save();
};

userSchema.methods.grt = function () {
  const resoen = crypto.randomBytes(20).toString("hex");
  const tok = crypto.createHash("sha256").update(resoen).digest("hex");
  const tokt = Date.now() + 15 * 60 * 1000;
  this.resetpassTok = tok;
  this.resetPasstime = tokt;
  return resoen;
};

const User = mongoose.model("User", userSchema);
export default User;

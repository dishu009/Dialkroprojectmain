import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const auth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    // console.log(`token  is ${token}`);

    const decoData = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(`deco data is : ${decoData}`);

    req.user = await User.findById(decoData._id);
    req.token = token;
    req.user = decoData;
    next();
  } catch (error) {
    // console.log(`ERROR IS  :::: Login please`);

    return res.status(401).json({
      success: false,
      message: `Unautherize Login Please `,
    });
  }
};
export default auth;

// const auth = async (req, res, next) => {
//   try {
//     //option 1
//     // const authorizationHeader = req.header("Authorization");
//     const authorizationHeader = req.header("x-auth-token");
//     if (!authorizationHeader) {
//       throw new Error("Authorization header is missing");
//     }

//     // const token = authorizationHeader.replace("Bearer ", "");

//     // if () {
//     //   throw new Error("Authentication token is missing");
//     // }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const user = await User.findOne({
//       _id: decoded._id,
//       "tokens.token": token,
//     });

//     if (!user) {
//       throw new Error("User not found");
//     }

//     req.token = token;
//     req.user = user;

//     next();
//   } catch (error) {
//     res
//       .status(401)
//       .send({ error: "Authentication failed", message: error.message });
//   }
// };

// export default auth;
//   module

// const auth = async (req, res, next) => {
//   try {
//     // Extract token securely, handling potential errors
//     const authorizationHeader = req.headers.authorization;
//     if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
//       throw new Error('Invalid or missing authorization header');
//     }

//     const token = authorizationHeader.substring(7); // Remove 'Bearer ' prefix

//     // Verify token and retrieve user data
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findOne({ _id: decoded._id }); // Simplified query

//     if (!user) {
//       throw new Error('Invalid user token'); // More specific error message
//     }

//     // Attach user information to the request
//     req.token = token;
//     req.user = user;

//     // Proceed to the next middleware
//     next();
//   } catch (error) {
//     // Handle authentication errors with informative messages
//     if (error instanceof jwt.TokenExpiredError) {
//       res.status(401).json({ error: 'Token has expired' });
//     } else if (error instanceof jwt.JsonWebTokenError) {
//       res.status(401).json({ error: 'Invalid token' });
//     } else {
//       res.status(401).json({ error: 'Authentication required' });
//     }
//   }
// };

// export default auth;

// const auth = async(req, res, next) => {
//   try {
//     const token = req.header('Authorization').replace('Bearer ', '')
//     const decoded = jwt.verify(token, process.env.JWT_SECRET)
//     const user = await User.findOne({ _id: decoded._id, 'tokens.token':token })
//   if(!user) {
//   throw new Error
//   }
//     req.token = token
//     req.user = user
//   next()
//   } catch (error) {
//   res.status(401).send({error: "Authentication required"})
//    }
//   }

// export const isLogin = (req, res, next) => {
//   if (req.user) {
//     return next();
//   }

//   return res
//     .status(401)
//     .json({ success: false, message: "Unauthorized - Please log in" });
// };

// const Auth = (req, res, next) => {
//   const token = req.cookie.token;
//   if (!token)
//     return res
//       .status(401)
//       .json({ message: "Please Login/Unregister/Unauthorize" });

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(401).json({ message: "Forbidden" });
//     req.decoded = decoded;
//     next();
//   });
// };
// export default Auth;

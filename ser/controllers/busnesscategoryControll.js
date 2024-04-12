// import Category from "../models/businessCategoryModel.js";

// export const getcategory = async (req, res, next) => {
//   try {
//     //   if (req.user.role !== "admin")
//     // return res.status(401).json({ message: "you cant access this way " });
//     const category = await Category.find();
//     if (!category)
//       return res.status(404).json({ message: "No Category Exist" });

//     res.status(200).json({
//       success: true,
//       data: category,
//     });
//   } catch (error) {
//     res.status(505).json({
//       success: false,
//       message: `Cat Internal Server Error`,
//       error,
//     });
//   }
// };

// export const getCategorybyId = async (req, res, next) => {
//   const category = await Category.findById(req.params.id);
//   if (!category) return res.status(404).json({ message: "No Category Exist " });
//   res.status(200).json({
//     success: true,
//     data: category,
//   });
// };

// export const updateCategory = async (req, res, next) => {
//   const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   })
//     .then((data) => {
//       return res.status(200).json({
//         success: true,
//         data: data,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     });
// };

// export const createCategory = async (req, res, next) => {
//   try {
//     const { name } = req.body;

//     if (!name)
//       return res.status(401).json({ message: "Please Enter All Feilds" });

//     const existcat = await Category.findOne({ name });

//     if (existcat)
//       return res.status(401).json({ message: "Category Already Exists" });

//     const createBus = await Category.create({ name });

//     res.status(200).json({
//       success: true,
//       message: `Category Created`,
//       data: createBus,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

import Business from "../models/businessModel.js";
// import features from "../utils/features.js";
import errorHandler from "express-async-handler";
import cloudinary from "cloudinary";
import multer from "multer";

// console.log(cloudinary.config())

const storage = multer.diskStorage({});
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 5 * 1024 * 1024,
    files: 5,
    fileFilter: (req, file, cb) => {
      if (file.mimetype.startWith("image")) {
        cb(null, true);
      } else {
        cb(new Error("only image files are allowed"));
      }
    },
  },
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

// export const getBusiness = async (req, res, next) => {
//   try {
//     const { category, location, minPrice, maxPrice } = req.query;

//     const business = await Business.find();
//     if (!business)
//       return res.status(404).json({
//         message: "No Business Exist",
//         success: false,
//       });

//     res.status(200).json({
//       message: "All Business Founde",
//       success: true,
//       business,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: `Internal Server Error `,
//       success: false,
//     });
//   }
// };

export const getBusiness = errorHandler(async (req, res) => {
  //For Pageination ,and Homw Many Business SHould Display At once ,
  // ANd how many Pages skip
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  //Category Filter
  const query = {};
  if (req.query.category) {
    query.category = req.query.category;
  }

  if (req.query.city) {
    query["location?.city"] = req.query.location?.city;
  }

  if (req.query.keyword) {
    query.keyword = req.query.description;
  }

  const busCount = await Business.countDocuments();
  const allBusiness = await Business.find(query).skip(skip).limit(limit);

  if (!allBusiness)
    return res.status(404).json({ message: "No business found" });

  res.status(201).json({
    message: "Busienss Found",
    success: true,
    total: busCount,
    allBusiness,
    skip,
  });
});

// export const getBusiness = errorHandler(async (req, res) => {
//   const resultperpage = 6;

//   const busCount = await Business.countDocuments();

//   const apiFeature = new features(Business.find(), req.query)
//     .search()
//     .filter()
//     .pagination(resultperpage);
//   const business = await apiFeature.query;
//   // const category = await business.distinct("category");
//   // console.log(query)
//   if (!business) return res.status(404).json({ message: "No business found" });

//   res.status(201).json({
//     message: "Busienss Found",
//     success: true,
//     business,
//     busCount,
//   });
// });

export const getBusinessById = async (req, res) => {
  const business = await Business.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "No business found" });
      }
      return res.status(200).json({
        success: true,
        message: "Business Found",
        data,
      });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

// export const createBusiness = async (req, res, next) => {
//   try {
//     req.body.user = req.user._id;

//     const createdBusiness = await Business.create(req.body)
//       .then((data) => {
//         res.status(200).json({
//           success: true,
//           message: "Business Created",
//           data,
//         });
//       })
//       .catch((err) => {
//         res.status(404).json({ message: "Enter all fields" });
//       });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }

export const createBusiness = async (req, res, next) => {
  try {
    req.body.user = req.user._id;

    const images = [];

    // upload.array("images", 5)(req, res, async (err) => {
    //   if (err instanceof multer.MulterError) {
    //     return res.status(400).json({ error: err.message });
    //   } else if (err) {
    //     return res.status(500).json({
    //       error: "Internal Server Error",
    //     });
    //   }
    // });

    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const uploadedImage = await cloudinary.uploader.upload(file.buffer,{folder:"myfolder"});
        images.push({
          url: uploadedImage.secure_url,
          public_id: uploadedImage.public_id,
        });
         // .then((data) => {
        //   return images.push({
        //     url: data.secure_url,
        //     public_id: data.public_id,
        //   });
        // })
        // .catch((err) => {
        //   console.log(err);
        //   res.status(500).json({
        //     error: "Internal Server Error",
        //   });
        // });
      }
    }

    const businessData = {
      ...req.body,
      images: images,
    };

    const createdBusiness = await Business.create(businessData);

    res.status(200).json({
      success: true,
      message: "Business Created",
      data: createdBusiness,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateBussiness = async (req, res) => {
  const updateBusiness = await Business.findByIdAndUpdate(
    req.params.id,
    req.body
  )
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: Error.message });
      }
      return res.status(200).json({
        success: true,
        message: "Business Updated",
      });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

export const deleteBusiness = async (req, res, next) => {
  const deleteBusiness = await Business.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: Error.message });
      }
      return res.status(200).json({
        success: true,
        message: "Business Deleted",
      });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

export const businessbycategory = async (req, res, next) => {
  // res.send("fuck the world");
  const allCategories = await Business.distinct("category")
    .then((data) => {
      res.status(200).json({
        success: true,
        message: `Business Found With Selected Category`,
        data,
      });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

export const businessbycity = async (req, res, next) => {
  // res.send("fuck the world");
  const allCategories = await Business.distinct("location.city")
    .then((data) => {
      res.status(200).json({
        success: true,
        message: `Business Found With Selected Category`,
        data,
      });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

// export const getBusinesscategory = async (req, res) => {
//   const business = await Business.find();
//   if (!business.category) return res.status(404).json({ message: "No category found" });
//   res.status(201).json({
//     message: "Busienss Found",
//     success: true,

//   });
// };

// console.log(allCategories);
// if (!allCategories || allCategories.length === 0) {
//   return res.status(404).json({ message: "No categories found" });
// }

// res.status(200).json({
//   success: true,
//   message: `Business Found With Selected Category`,
//   allCategories,
// });
``;
export const createBusinessReviewandrating = async (req, res, next) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) return res.status(401).json({ error: "Not found  " });

    // req.body.user = req.user._id;
    const { user } = req.body;
    const { text, rating } = req.body;
    const review = {
      user,
      text,
      rating,
    };

    if (!user || !text || !rating)
      return res
        .status(404)
        .json({ message: "Not found  ", user, text, rating });

    business.reviews.push(review);
    await business.save();

    res
      .status(200)
      .json({ message: "Business Found By id ", data: business.reviews });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const findBusinessReviewandrating = async (req, res, next) => {
  try {
    const business = await Business.findById(req.params.id).distinct("reviews");
    if (!business) return res.status(401).json({ error: "Not found  " });
    // // req.body.user = req.user._id;
    // const { user } = req.body;
    // const { text, rating } = req.body;
    // const review = {
    //   user,
    //   text,
    //   rating,
    // };

    // if (!user || !text || !rating)
    //   return res.status(402).json({ error: "Not found  ", user, text, rating });

    // business.reviews.push(review);
    // await business.save();

    res.status(200).json({ message: "Found Business Review ", data: business });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// let images = [];

// if (typeof req.body.images === "string") {
//   images.push(req.body.images);
// } else {
//   images = req.body.images;
// }

// const imagesLinks = [];

// for (let i = 0; i < images.length; i++) {
//   const result = await cloudinary.v2.uploader.upload(images[i], {
//     folder: "products",
//   });

//   imagesLinks.push({
//     public_id: result.public_id,
//     url: result.secure_url,
//   });
// }

// req.body.images = imagesLinks;

// req.body.user = req.user._id;

// Handle image upload using Multer middleware
// upload.single('image')(req, res, async (err) => {
//   if (err) {
//     console.error(err);
//     return res.status(500).json({ error: 'Image upload failed' });
//   }

//   // Destructure image file from request
//   const { file } = req;

//   // Check if image was uploaded
//   if (!file) {
//     return res.status(400).json({ error: 'Please upload an image' });
//   }

//   // Upload image to Cloudinary
//   const uploadResult = await cloudinary.uploader.upload(file.path);

//   // Update request body with image URL
//   req.body.images = [uploadResult.secure_url];

// const images = req.files.images;

// if (!images || images.length === 0)
//   return res.status(404).json({ message: `No image Uploaded` });

// const imageUploadPromis = images.map((files) => {
//   return new Promise((resolve, reject) => {
//     cloudinary.Uploader.upload(files.path, (result) => {
//       if (result.error) {
//         reject(result.error.message);
//       } else {
//         resolve({ public_id: result.public_id, url: result.secure_url });
//         // images.push({
//         //   public_id: result.public_id,
//         //   url: result.secure_url,
//         // });
//       }
//     });
//   });
// });

// const imageUpload = await Promise.all(imageUploadPromis);
// const businessData = { ...req.body, images: imageUpload };

// const {
//   name,
//   description,
//   category,
//   contact: { phone, email, website },
// } = req.body;
// const createBusiness = await Business.create({
//   name,
//   description,
//   category,
//   contact: { phone, email, website },

// })
//   .then((data) => {
//     if (!data) {
//       return res.status(404).json({ message: "Enter ALll Fields" });
//     }
//     res.status(200).json({
//       success: true,
//       message: "Business Created",
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

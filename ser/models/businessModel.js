import mongoose from "mongoose";
const odjId = mongoose.Schema.Types.ObjectId;
// Define the Business Schema
const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    trim: true,
  },
  description: {
    type: String,
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  contact: {
    phone: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
      lowercase: true,
    },
    website: {
      type: String,
    },
    // Add more contact details as needed
  },
  location: {
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    // Add more location details as needed
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        // required: true,
      },
      text: {
        type: String,
        // required: true,
      },
      rating: {
        type: Number,
        // required: true,
        min: 1,
        max: 5,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  images: [
    {
      public_id: {
        type: String,
        //  required: true,
      },
      url: {
        type: String,
        //  required: true,
      },
    },
  ],

// //   images:{
// // data: Buffer,
// // contentType:String,
// //   },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    // required: true,
  },
  // Add more fields as needed
});

const Business = mongoose.model("Business", businessSchema);
export default Business;

import mongoose from "mongoose";


const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true, // Ensures unique titles for SEO relevance
    },
    slug: {
      // Add a slug field for SEO-friendly URLs
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    body: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      trim: true,
      maxlength: 255, // Limit excerpt length for search snippets
    },
    category: {
      type: String,
      required: true,
    },
    tags: [String],
    metaDescription: {
      // Add a field for meta descriptions
      type: String,
      trim: true,
      maxlength: 160, // Limit meta description length for SEO
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    // Add pre-save hook to generate slug automatically
    pre: "save",
    async function(next) {
      if (!this.isModified("title")) return next();
      this.slug = slugify(this.title, { lower: true });
      next();
    },
  }
);

const Blog = mongoose.model("Blog", blogSchema);

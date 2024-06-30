const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    whatItIs: String,
    keyFeatures: [String], // Array of features
    securityFeatures: [String], // Array of features
  },
  shortdescription: String,

  image: String,

  size: Number,

  url: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
    validate: {
        validator: function(value) {
            const validCategories = [
                "Games",
                "Browser",
                "Music",
                "Video",
                "Productivity",
                "Utilities",
                "Security",
                "lick",
                "Other"
            ];
            return validCategories.some(cat => cat.toLowerCase() === value.toLowerCase());
        },
        message: props => `${props.value} is not a valid category!`
    }
},

  platform: {
    type: [String],
    enum: ["Android", "Windows", "iOS", "Linux", "MacOS"],
    required: true,
  },

  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },

  downloadCount: {
    type: Number,
    default: 0,
  },

  releaseDate: {
    type: Date,
  },

  version: String,

  developer: String,

  // License details instead of a single string
  license: {
    type: String,
    enum: ["Open-Source", "Proprietary", "Other"], // Add more as needed
  },

  tags: [String],

  systemRequirements: {
    minimum: String,
    recommended: String,
  },

  languages: [String],

  // Additional fields
  screenshots: [String], // Array of screenshot URLs
  changelog: String, // Optional: Store changelog information
  contentRating: String, // Optional: ESRB rating or similar
  price: {
    // Optional: Price and currency
    amount: Number,
    currency: String,
  },
  isFree: Boolean, // Indicate free or paid software

  // Search related
  keywords: [String], // Extracted from title, description, tags

  // Version control
  schemaVersion: Number, // Track schema changes
  reviews: [
    { type: Schema.Types.ObjectId, ref: "Review" }
]
});

const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;



// this section creates the user schema to make the layout of the Schema.

const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(// Creating the user Schema 
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;

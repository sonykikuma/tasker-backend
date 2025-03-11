const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const teamModel = mongoose.model("Team", teamSchema);

module.exports = { teamModel };

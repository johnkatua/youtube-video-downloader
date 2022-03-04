const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    file: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    videoId: {
      type: String,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;

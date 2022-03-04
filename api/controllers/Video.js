const Video = require("../models/Video");
const fs = require("fs");
const ytdl = require("ytdl-core");

// create a new video
const createVideo = async (req, res) => {
  const { file, title } = req.body;
  const info = await ytdl.getInfo(file);
  // const url = await ytdl(file);
  // .pipe(fs.createWriteStream(`./videos/${title}.mp4`))
  try {
    const newVideo = await Video.create({
      title: info.videoDetails.title,
      file,
      thumbnail: info.videoDetails.thumbnails[0].url,
      videoId: info.videoDetails.videoId,
    });
    if (newVideo) {
      res.status(201).json({
        success: true,
        data: newVideo,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Error creating video",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// get all videos
const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    if (videos) {
      res.status(200).json({
        success: true,
        data: videos,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No videos found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// get a single video by id
const getVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findById(id);
    if (video) {
      res.status(200).json({
        success: true,
        data: video,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `Video with id ${id} not found`,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// delete video by id
const deleteVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findByIdAndDelete(id);
    if (video) {
      res.status(200).json({
        success: true,
        message: `Successfully deleted video with an id of ${id}`,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `Video with id ${id} not found`,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

module.exports = {
  createVideo,
  getVideos,
  getVideo,
  deleteVideo,
};

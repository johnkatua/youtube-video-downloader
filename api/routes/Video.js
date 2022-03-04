const express = require("express");
const router = express.Router();
const api = require("../controllers/Video");

router.post("/createVideo", api.createVideo);
router.get("/getVideos", api.getVideos);
router.get("/getVideo/:id", api.getVideo);
router.delete("/deleteVideo/:id", api.deleteVideo);

module.exports = router;

import React from "react";
import Youtube from "react-youtube";

const SingleVideo = ({ videos }) => {
  const opts = {
    height: "590",
    width: "640",
  };

  const deleteVideo = async (id) => {
    const response = await fetch(`http://localhost:8002/api/deleteVideo/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    console.log(json);
    window.location.reload(false);
  };

  return (
    <div className="video">
      {videos.map((video, index) => {
        const { _id, title, videoId } = video;
        console.log("videoId", videoId);
        return (
          <div key={index} className="video--container">
            <Youtube videoId={videoId} className="img" opts={opts} />
            <h2>{title}</h2>
            <button onClick={() => deleteVideo(_id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default SingleVideo;
